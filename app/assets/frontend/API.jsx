import ServerActionsCreator from "./actions/ServerActionsCreator";

export default {
  getAllResources() {
    $.get("/articles")
    .success(resources => {
      // create server action
      console.log("1. need action now");
      ServerActionsCreator.receiveResources(resources)
    })
    .error(error => {
      console.log(error);
    })
  },
  postResource(data) {
    console.log(data);
    $.post("/articles", {article: data})
    .success(newResource => {
      ServerActionsCreator.addNewResource(newResource);
    })
    .error(error => {
      console.log(error);
    });
  },
  deleteResource(fullResource) {
    $.ajax({
      url: "/articles/" + fullResource.resource.id,
      type: 'DELETE'
    })
    .success(deleteResource => {
      ServerActionsCreator.deleteResource(fullResource.index)
    })
    .error(error => {
      console.log(error);
    })
  }
}
