const bunny = {
  name: "Chester",
  tasks: ["Speak", "Learn", "Teach"],
  showTask: function () {
    this.tasks.forEach((element) => {
      console.log(this.name + " wants to : " + element);
    });
  },
};

bunny.showTask();
