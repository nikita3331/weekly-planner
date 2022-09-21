{
  const tasks = [];
  const createHtmlString = (filteredTasks) =>{
    let htmlTaskString=''
    for (const task of filteredTasks) {
      htmlTaskString += `
        <li>
        ${task.content}
        </li>`;
    }
    return htmlTaskString
  }
  const getTasksForDay=(selectedDay)=>{
    const filteredTasks=[]
    for (const task of tasks) {
      if(task.day===selectedDay){
        filteredTasks.push(task)
      }
    }
    return filteredTasks
  }
  const render = () => {
    const weekElement = document.querySelector(".js-week");
    const weekContent = weekElement.value;
    switch (weekContent) {
      case "Monday":
        let mondayTasks=getTasksForDay('monday')
        document.querySelector(".js-monday").innerHTML = createHtmlString(mondayTasks);
        break;

      case "Tuesday":
        let tuesdayTasks=getTasksForDay('tuesday')
        document.querySelector(".js-tuesday").innerHTML =  createHtmlString(tuesdayTasks);
        break;

      case "Wednesday":
        let wednesdayTasks=getTasksForDay('wednesday')
        document.querySelector(".js-wednesday").innerHTML =  createHtmlString(wednesdayTasks);
        break;

      case "Thursday":
        let thursdayTasks=getTasksForDay('thursday')
        document.querySelector(".js-thursday").innerHTML =  createHtmlString(thursdayTasks);
        break;

      case "Friday":
        let fridayTasks=getTasksForDay('friday')
        document.querySelector(".js-friday").innerHTML =  createHtmlString(fridayTasks);
        break;

      case "Saturday":
        let saturdayTasks=getTasksForDay('saturday')
        document.querySelector(".js-saturday").innerHTML =  createHtmlString(saturdayTasks);
        break;

      case "Sunday":
        let sundayTasks=getTasksForDay('sunday')
        document.querySelector(".js-sunday").innerHTML =  createHtmlString(sundayTasks);
        break;
    }
  };

  const init = () => {
    render();

    const form = document.querySelector(".js-form");

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const taskElement = document.querySelector(".js-tasks");
      const dropdown = document.querySelector(".js-week");
      const selectedDay = dropdown.value;
      const taskContent = taskElement.value.trim();
      if (taskContent === "") {
        return;
      }
      tasks.push({
        content: taskContent,
        day:selectedDay.toLowerCase(),
        done: false,
      });
      render();
    });
  };

  init();
}
