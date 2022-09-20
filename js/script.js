{
  console.log("mama");
  const tasks = [];

  const render = () => {
    let htmlTaskString = "";

    const weekElement = document.querySelector(".js-week");
    const weekContent = weekElement.value;

    for (const task of tasks) {
      htmlTaskString += `
        <li>
        ${task.content}
        </li>`;
    }

    switch (weekContent) {
      case "Monday":
        document.querySelector(".js-monday").innerHTML = htmlTaskString;
        break;

      case "Tuesday":
        document.querySelector(".js-tuesday").innerHTML = htmlTaskString;
        break;

      case "Wednesday":
        document.querySelector(".js-wednesday").innerHTML = htmlTaskString;
        break;

      case "Thursday":
        document.querySelector(".js-thursday").innerHTML = htmlTaskString;
        break;

      case "Friday":
        document.querySelector(".js-friday").innerHTML = htmlTaskString;
        break;

      case "Saturday":
        document.querySelector(".js-saturday").innerHTML = htmlTaskString;
        break;

      case "Sunday":
        document.querySelector(".js-sunday").innerHTML = htmlTaskString;
        break;
    }
  };

  const init = () => {
    render();

    const form = document.querySelector(".js-form");

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const taskElement = document.querySelector(".js-tasks");
      const taskContent = taskElement.value.trim();

      if (taskContent === "") {
        return;
      }
      tasks.push({
        content: taskContent,
        done: false,
      });
      render();
    });
  };

  init();
}
