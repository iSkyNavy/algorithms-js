let ff = [];
const bunny = {
  name: "Chester",
  tasks: ["Speak", "Learn", "Teach"],
  showTask: function () {
    this.tasks.forEach((element) => {
      console.log(this.name + " wants to : " + element);
    });
  },
  showTask2: function () {
    this.tasks.forEach(function (element) {
      console.log(bunny.name + " wants to : " + element);
    })
  }
};

bunny.showTask2();
