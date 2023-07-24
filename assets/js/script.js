const ctx = document.getElementById('myChart');
new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Completed', 'Ongoing', 'Stalled'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3],
      borderWidth: 1
    }]
  } 
});

const project = document.querySelectorAll('.project')

const displayproject = (values) =>{
    project.forEach(element =>{
    element.style.display = "none"
    const title = element.querySelector('h2').innerHTML.toUpperCase();
    const status = element.dataset.status.toUpperCase();
    const recent = element.querySelector('p').innerHTML.toUpperCase();

    if (title.includes(values)){
        element.style.display = "block"
    }
    else if (values != 'RECENT' && status.includes(values)){
      element.style.display = "block"
    }
    else if (values === 'RECENT' && (recent.includes('HOUR') || recent.includes('RECENT')) ){
    element.style.display = "block"
    }
  })
}

searchproject.addEventListener('input', (e) =>{
    displayproject(e.target.value.toUpperCase())
})
projectfilter.addEventListener('input', (e) =>{
  displayproject(e.target.value.toUpperCase())
})
    