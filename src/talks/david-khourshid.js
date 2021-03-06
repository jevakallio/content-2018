const enums = require("../enums");
const keywords = require("../keywords");

module.exports = {
  speakers: [require("../speakers/david-khourshid")],
  title: "Reactive State Machines and Statecharts",
  description:
    "Managing the many user interface states of an application easily becomes complicated. We'll discover how some historical and important computer science concepts – state machines and statecharts – and a functional + reactive approach can make it much easier to understand, visualize, implement, and automatically create tests for complex user interfaces and flows.",
  type: enums.PRESENTATION,
  keywords: require("../speakers/david-khourshid").keywords,
};
