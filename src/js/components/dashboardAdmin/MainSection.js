import React from "react";

import DefectList from "./DefectList";
import DefectsAssigned from "./DefectsAssigned";
import UploadDefects from "./UploadDefects";

export default class MainSection extends React.Component {

 componentDidMount(){
 	$(document).ready(function() {
		$(".btn-pref .btn").click(function () {
		    $(".btn-pref .btn").removeClass("btn-primary").addClass("btn-default");
		    // $(".tab").addClass("active"); // instead of this do the below 
		    $(this).removeClass("btn-default").addClass("btn-primary");   
		});
	});
 }

  render() {
    return (
      <div class= "welcomeSectionContainer">
		<DefectList/>
      </div>
    );
  }
}
