var projectList = {
projects : [],
  displayProject : function(){
    if(this.projects.length === 0) {
      console.log("There is no Projects in ProjectList");
    } else {
      console.log('My Proljects : ',this.projects);
      

      // var projectWithCompletedStatus = '';
      //     console.log('My Projects : ');
      //     for (var i = 0; i < this.projects.length; i++) {
      //       for(var j = 0; j < this.projects[i].length; j++){
      //         var project = this.projects[i][j];
      //         if (project.completed === true) {
      //             projectWithCompletedStatus = '(X)-' + project.projects[i][j];
      //         } else {
      //             projectWithCompletedStatus = '()-' + project.projects[i][j];
      //         }
      //         console.log(projectWithCompletedStatus);
      //     }
      //   }
    }
  },
  addProject : function(id, name, description,startDate,endDate, projectIdentifier) {
    this.projects.push({
      id : id,
    name : name,
    description : description,
    startDate : startDate,
    endDate:endDate,
    projectIdentifier : projectIdentifier
    });
    this.displayProject();
  },

  // changeProject: function (position1,position2, Project) {
  //   this.projects[position1][position2].project = project;
  //   this.displayProject();
  // },
  deleteProject: function (position) {
    this.projects.splice(position, 1);
    this.displayProject();
  }
}