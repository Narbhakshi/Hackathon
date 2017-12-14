import React from "react";


import VitalStats from "./VitalStats";
var userName;
export default class DevDashboard extends React.Component {
	constructor(){
		super();
		this.state = {
			assignDefectUrl: "http://mdadils02.corp.amdocs.com:8080/backend.server/myresource/assignDefect",
			defectResolutions: ['Fixed', 'D2CC', 'RFST', 'Rejected'],
			defects: [],
			userDefects: []
		};
		this.getDefectList();
	}

	getDefectList(){
		var url = "http://mdadils02.corp.amdocs.com:8080/backend.server/myresource/getList"; 
		$.ajax({
			url: url,
			type: "GET",
			data: "",
			contentType: "application/json",
			beforeSend: this.setHeaders,
			dataType: "json",
			success: function(data, textStatus, request) {
			  this.getDefectListSuccess(data, textStatus, request);
			}.bind(this),
			error: function(data, textStatus, request){
			  this.getDefectListError(data, textStatus, request);
			}.bind(this)
		})
	}

	getDefectListSuccess(data, textStatus, request){
		var loginData = window.sessionStorage.getItem("loginDetails");
	    var userName = JSON.parse(loginData);
	    userName = userName.name;
		this.setState({defects:data});
		var userDefects = _.filter(data, function(obj, index) {
			return obj.assignedTo == userName;
		});
		this.setState({userDefects:userDefects});
	}

	getDefectListError(data, textStatus, request){
		alert("failed to fetch defect list");
	}

	updateStatus(status){
		var url = this.state.updateDefectStatusUrl + "?id=" + status + "&status=" + status;
		$.ajax({
			url: url,
			type: "GET",
			data: "",
			contentType: "application/json",
			beforeSend: this.setHeaders,
			dataType: "json",
			success: function(data, textStatus, request) {
			  this.updateDefectStatusSuccess(data, textStatus, request);
			}.bind(this),
			error: function(data, textStatus, request){
			  this.updateDefectStatusError(data, textStatus, request);
			}.bind(this)
		})
	}

	assignDefect(id){
		var url = this.state.assignDefectUrl + "?id=" + id;
		$.ajax({
			url: url,
			type: "GET",
			data: "",
			contentType: "application/json",
			beforeSend: this.setHeaders,
			dataType: "json",
			success: function(data, textStatus, request) {
			  this.assignDefectSuccess(data, textStatus, request);
			}.bind(this),
			error: function(data, textStatus, request){
			  this.assignDefectError(data, textStatus, request);
			}.bind(this)
		})
	}

	assignDefectSuccess(data, status, request) {
		alert("Successfully assigned defect");
		this.getDefectList();
	}

	assignDefectError(data, status, request) {
		alert("Failed to assign defect");	
	}

	updateDefectStatusSuccess(data, status, request) {
		alert("Successfully updated status");
	}

	updateDefectStatusError(data, status, request) {
		alert("Failed to update status");	
	}
	componentDidMount() {
    	$(document).ready(function() {
			$(".btn-pref .btn").click(function () {
			    $(".btn-pref .btn").removeClass("btn-primary").addClass("btn-default");
			    // $(".tab").addClass("active"); // instead of this do the below 
			    $(this).removeClass("btn-default").addClass("btn-primary");   
			});
		});
	}
	componentWillMount(){
	     var loginData = window.sessionStorage.getItem("loginDetails");
	    userName = JSON.parse(loginData);
	    userName = userName.name;
	 }

  render() {
    return (
      <div class= "devDashboardContainer">
       <nav class="navbar navbar-default sticky">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">
              <img src="../images/bugSanchalan.jpg" height="40px" alt="Brand"/> Dev Dashboard Header
            </a>
          </div>
        </div>
      </nav>

     <div class="container">
      <div class="col-sm-12 row row-centered">
        <div class="card hovercard">
            <div class="card-background">
                <img class="card-bkimg" alt="" src="../images/profile.jpg"/>
            </div>
            <div class="useravatar">
                <img alt="" src="../images/profmdadil.jpg"/>
            </div>
            <div class="card-info"> <span class="card-title">Hello {userName}</span>
            </div>
        </div>
      </div>
      <div class="col-sm-12 row row-centered">
        <div class="col-sm-6">
            <div class="thumbnail">
                <a href="#assignedDefectsModal" class="" data-toggle="modal">
                    <div class="caption">
                        <h4 class="">My Assignment</h4>
                    </div>
                    <img src="../images/DefectList.jpg" alt="..." class=""/>
                </a>
            </div>
        </div>
        <div class="col-sm-6 col-centered">
            <div class="thumbnail">
                <a href="#defectListModal" class="" data-toggle="modal">
                    <div class="caption">
                        <h4 class="">Defect List</h4>
                    </div>
                    <img src="../images/DefectAssigned.jpg" alt="..." class=""/>
                </a>
            </div>
        </div>
      </div>
      <div class="col-sm-12 row row-centered">
        <div class="col-sm-6">
            <div class="thumbnail">
                <a href="#resourceListModal" class="" data-toggle="modal">
                    <div class="caption">
                        <h4 class="">Overall Assignment</h4>
                    </div>
                    <img src="../images/upload.jpg" alt="..." class=""/>
                </a>
            </div>
        </div>
        </div>
      </div>

    <div class="modal fade" id="assignedDefectsModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header modal-header-success">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">[ × ]</button>
                    <h2><i class="glyphicon glyphicon-flash"></i>   My defects!!</h2>
                </div>
                <div class="modal-body">
                    <div class="col-md-12 radio-choices">
                       


	                    <div class="">
				            <table class="table">
					          <thead>
					            <tr>
					              <th scope="col">Defect Id</th>
					              <th scope="col">Defect Details</th>
					              <th scope="col">Severity</th>
					              <th scope="col">Status</th>
					              <th scope="col"></th>
					            </tr>
					          </thead>
					          <tbody>
					          {this.state.userDefects.map(function(defect, index){
				                    return <tr><th scope="row">{defect.defectId}</th>
							    	<td>{defect.defectSummary}</td>
									<td class="bg-{defect.severity}">{defect.severity}</td>
									<td><div class="dropdown">
									  <button class="btn btn-default dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">Open
									  <span class="caret"></span></button>
									  <ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
									    
									  {this.state.defectResolutions.map(function(status, index){
						                return <li role="presentation" onClick={()=>this.updateStatus('Fixed')}><a role="menuitem">{status}</a>						                </li>;
						              }.bind(this))}
									  </ul>
								  	</div></td>
				                  	</tr>
				                }.bind(this))}
					          </tbody>
					        </table>
	                    </div>
                	</div>

                </div><div class="clearfix"></div>
            </div>
        </div>
    </div>



    <div class="modal fade" id="defectListModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header modal-header-success">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">[ × ]</button>
                    <h2><i class="glyphicon glyphicon-list"></i>   Lets Defectify!!</h2>
                </div>
                <div class="modal-body">
                    <div class="col-md-12 radio-choices">
                       


	                    <div class="">
				            <table class="table">
					          <thead>
					            <tr>
					              <th scope="col">Defect Id</th>
					              <th scope="col">Defect Details</th>
					              <th scope="col">Status</th>
					              <th scope="col">Assign</th>
					            </tr>
					          </thead>
					          <tbody>
					            {this.state.defects.map(function(defect, index){
				                    return <tr><th scope="row">{defect.defectId}</th>
							    	<td>{defect.defectSummary}</td>
									<td>{defect.status}</td>
									<td><button class="btn btn-primary" onClick={()=>this.assignDefect(defect.defectId)}>Assign To Me</button></td>
				                  	</tr>
				                  }.bind(this))}
					          </tbody>
					        </table>
	                    </div>
                	</div>

                </div><div class="clearfix"></div>
            </div>
        </div>
    </div>




    <div class="modal fade" id="resourceListModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header modal-header-success">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">[ × ]</button>
                    <h2><i class="glyphicon glyphicon-user"></i>   Resource wise allocation count!!</h2>
                </div>
                <div class="modal-body">
                    <div class="col-md-12 radio-choices">
                       


	                    <div class="">
				            <table class="table">
					          <thead>
					            <tr>
					              <th scope="col">Sr No.</th>
					              <th scope="col">Resource</th>
					              <th scope="col">Allocation</th>
					            </tr>
					          </thead>
					          <tbody>
					            <tr>
					              <th scope="row">1</th>
					              <td>Shobhit</td>
					              <td>
					              	<div class="">12</div>
					              </td>
					              <td><div class="color-red">1 :Critical</div>
					              	<div class="color-orange">4 : High</div>
					              	<div class="color-yellow">6 : Medium</div>
					              	<div class="color-green">1 : Low</div>
					              </td>
					            </tr>
					            <tr>
					              <th scope="row">2</th>
					              <td>Vishal</td>
					              <td>
					              	<div class="">12</div>
					              </td>
					              <td><div class="color-red">1 :Critical</div>
					              	<div class="color-orange">7 : High</div>
					              	<div class="color-yellow">5 : Medium</div>
					              	<div class="color-green">1 : Low</div>
					              </td>
					            </tr>
					            <tr>
					              <th scope="row">3</th>
					              <td>Shahrukh</td>
					              <td>
					              	<div class="">7</div>
					              </td>
					              <td><div class="color-red">0 :Critical</div>
					              	<div class="color-orange">2 : High</div>
					              	<div class="color-yellow">3 : Medium</div>
					              	<div class="color-green">2 : Low</div>
					              </td>
					            </tr>

					          </tbody>
					        </table>
	                    </div>
                	</div>

                </div><div class="clearfix"></div>
            </div>
        </div>
    </div>

        	

      </div>
    );
  }
}
