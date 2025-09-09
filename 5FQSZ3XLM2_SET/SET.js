/*NAVBAR STYLING*/
const logoBtn = document.getElementById('logoBtn');
const toggleBtn = document.getElementById('toggleBtn');
const sidebarLeft = document.getElementById('sidebarLeft');
const sidebarRight = document.getElementById('sidebarRight');

logoBtn.addEventListener('click', () => {
    sidebarLeft.classList.toggle('active');
    sidebarRight.classList.remove('active');
});

toggleBtn.addEventListener('click', () => {
    sidebarRight.classList.toggle('active');
    sidebarLeft.classList.remove('active');
});

function closeSidebars() {
    sidebarLeft.classList.remove('active');
    sidebarRight.classList.remove('active');
}

document.addEventListener('click', function(e) {
    if (!e.target.closest('.sidebar') &&
        !e.target.closest('#logoBtn') &&
        !e.target.closest('#toggleBtn')) {
        closeSidebars();
    }
});



const chatbotLogo = document.getElementById('chatbot-logo');
const chatbotContainer = document.getElementById('chatbot-container');
const sendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const chatbotBody = document.getElementById('chatbot-body');

// Toggle chatbot visibility
chatbotLogo.addEventListener('click', () => {
    chatbotContainer.style.display = chatbotContainer.style.display === 'flex' ? 'none' : 'flex';
});

// Sample Q&A content
const chatbotData = [{
        question: "courses",
        answer: "DSU Trichy offers Engineering, Medicine, Law, Management, and more."
    },
    {
        question: "location",
        answer: "DSU is located on NH-45 near Samayapuram Toll Plaza, Trichy."
    },
    {
        question: "placement",
        answer: "DSU has 250+ recruiters and offers packages up to ₹15.5 LPA."
    },
    {
        question: "hostel",
        answer: "Yes, DSU provides separate hostels for boys and girls with modern amenities."
    },
    {
        question: "phd",
        answer: "PhD applicants can apply with NET/SET or DSU's entrance test. Fellowships available."
    }
];

// Handle user input
sendBtn.addEventListener('click', () => {
    const input = userInput.value.trim().toLowerCase();
    if (!input) return;

    // Display user message
    const userWrapper = document.createElement('div');
    userWrapper.className = 'message-wrapper user-wrapper';
    const userMsg = document.createElement('div');
    userMsg.className = 'message user';
    userMsg.textContent = userInput.value;
    userWrapper.appendChild(userMsg);
    chatbotBody.appendChild(userWrapper);

    // Find matching response
    const match = chatbotData.find(item => input.includes(item.question));
    const responseText = match ? match.answer : "Sorry, I couldn't find that. Try asking about courses, location, or placements.";

    // Display bot response
    const botWrapper = document.createElement('div');
    botWrapper.className = 'message-wrapper bot-wrapper';
    const botMsg = document.createElement('div');
    botMsg.className = 'message bot';
    botMsg.textContent = responseText;
    botWrapper.appendChild(botMsg);
    chatbotBody.appendChild(botWrapper);

    userInput.value = "";
    chatbotBody.scrollTop = chatbotBody.scrollHeight;
});







const counters = document.querySelectorAll('.counter');
let hasAnimated = false;

const runCounter = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const speed = 100;
            const increment = Math.ceil(target / speed);

            if (count < target) {
                counter.innerText = count + increment;
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
            runCounter();
            hasAnimated = true;
            observer.disconnect();
        }
    });
}, {
    threshold: 0.5
});

const cardsSection = document.querySelector('.cards-containerrr');
observer.observe(cardsSection);



const cards = document.querySelectorAll('.info-card');

const observerr = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-card');
        }
    });
}, {
    threshold: 0.3
});

cards.forEach(card => {
    observerr.observe(card);
});




(function() {
    const els = document.querySelectorAll('.reveal');
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');

                io.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    els.forEach(el => io.observe(el));
})();





const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const totalEl = document.getElementById('total');
const completedEl = document.getElementById('completed');
const remainingEl = document.getElementById('remaining');
const emptyMessage = document.getElementById('emptyMessage');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function updateStats() {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const remaining = total - completed;

    totalEl.textContent = total;
    completedEl.textContent = completed;
    remainingEl.textContent = remaining;
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
    taskList.innerHTML = '';
    if (tasks.length === 0) {
        taskList.appendChild(emptyMessage);
        return;
    }

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';
        li.textContent = task.text;

        const actions = document.createElement('div');
        actions.className = 'task-actions';

        const completeBtn = document.createElement('button');
        completeBtn.textContent = task.completed ? 'Undo' : 'Complete';
        completeBtn.className = 'complete';
        completeBtn.onclick = () => {
            tasks[index].completed = !tasks[index].completed;
            saveTasks();
            renderTasks();
            updateStats();
        };

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
            updateStats();
        };

        actions.appendChild(completeBtn);
        actions.appendChild(deleteBtn);
        li.appendChild(actions);
        taskList.appendChild(li);
    });
}

function addTask() {
    const text = taskInput.value.trim();
    if (text === '') return;

    tasks.push({
        text,
        completed: false
    });
    taskInput.value = '';
    saveTasks();
    renderTasks();
    updateStats();
}


renderTasks();
updateStats();




const aids = ["overview-aids"];

aids.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        newPage.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>AIDS</title>
          <style>
            body {
              margin:0;
              font-family: 'Segoe UI', sans-serif;
              background-color: #f4f4f4;
            }

            header {
            width:100%;
              position:fixed;
              background-color:yellow;
              font-weight:bold;
              color:darkblue;
              padding: 20px;
              text-align: center;
              font-size: 2em;
              box-shadow: 0 4px 6px rgba(0,0,0,0.3);
              
            }


          h3 {
              text-align: center;
              color: #333;
              margin-bottom: 20px;
            }

            .card-container {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              gap: 20px;
             
            }

            .event-card {
              background: white;
              width: 100%;
              max-width: 300px;
              border-radius: 10px;
              box-shadow: 0 4px 12px rgba(0,0,0,0.1);
              overflow: hidden;
              transition: transform 0.3s ease;
              margin-top:65px;
            }

            .event-card:hover {
              transform: translateY(-5px);
              box-shadow: 0 8px 20px rgba(0,0,0,0.2);
            }

            .event-card img {
              width: 100%;
              height:25vh;
                background-size:cover;
            }

            .event-details {
              padding: 15px;
            }

            .event-details h3 {
              margin: 0 0 10px;
              font-size: 18px;
              color: #444;
            }

            .event-details p {
              margin: 0;
              font-size: 14px;
              color: #666;
            }

            @media (max-width: 600px) {
              .card-container {
                flex-direction: column;
                align-items: center;
              }
              .event-card{
                  margin-top:40px;
              }
            }
           
          </style>
        </head>
        <body>
          <header>DHANALAKSHMI SRINIVASAN UNIVERSITY</header>
             <div class="card-container" >
            <div class="event-card">
            <h3>About</h3>
              <p><ul>
              <li>The AI & DS department was launched in 2022 to meet the growing demand for emerging technologies.</li>
              <li>Classroom learning combined with hands-on sessions.</li>
              <li>Highly qualified and experienced, focused on delivering top-tier education and practical training.</li>
              <li>Workshops, seminars, and symposiums to foster industry-academia collaboration.</li>
              <li>To be a Centre of Excellence for innovation and research in computer science and engineering.</li>
              </ul></p>
            </div>
            
            <div class="event-card">
            <h3>Academic Curriculum</h3>
              <p><ul>
              <li>Courses in Machine Learning, Deep Learning, Data Analytics, NLP, Computer Vision</li>
              <li>Programming languages like Python, R, and tools like TensorFlow, Hadoop</li>
              <li>integration of theory with hands-on labs and real-world projects</li>
              </ul></p>
            </div>
            
            <div class="event-card">
            <h3>Research & Innovation</h3>
              <p><ul>
              <li>Focus on emerging areas like Generative AI, AR/VR, Robotics, and Predictive Analytics
              </li>
              <li>Student and faculty publications, patents, and funded research projects</li>
              <li>Collaboration with industry and academia for joint research initiatives</li></ul></p>
            </div>
            
            <div class="event-card">
            <h3>Career Opportunities</h3>
              <p><ul>
              <li>Roles like Data Scientist, ML Engineer, AI Architect, Business Analyst
              </li>
              <li>Placement partnerships with top tech firms and startups</li>
              <li>Internship programs and career guidance cells</li></ul></p>
            </div>
            
            <div class="event-card">
            <h3>Infrastructure & Labs</h3>
              <p><ul>
              <li>State-of-the-art computing labs with GPU clusters
              </li>
              <li>Access to cloud platforms and data repositories</li>
              <li>Smart classrooms and innovation hubs</li></ul></p>
            </div>
            
            <div class="event-card">
           <h3>Faculty & Mentorship</h3>
              <p><ul>
              <li>Experienced faculty with industry and research backgrounds
              </li>
              <li>Continuous professional development and global collaborations</li>
            
            
          </div>
          

         
        </body>
        </html>
      `);
        newPage.document.close();
    };
});





const aiml = ["overview-aiml"];

aiml.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        newPage.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>AIML</title>
          <style>
            body {
              margin:0;
              font-family: 'Segoe UI', sans-serif;
              background-color: #f4f4f4;
            }

            header {
            width:100%;
              position:fixed;
              background-color:yellow;
              font-weight:bold;
              color:darkblue;
              padding: 20px;
              text-align: center;
              font-size: 2em;
              box-shadow: 0 4px 6px rgba(0,0,0,0.3);
              
            }


          h3 {
              text-align: center;
              color: #333;
              margin-bottom: 20px;
            }

            .card-container {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              gap: 20px;
             
            }

            .event-card {
              background: white;
              width: 100%;
              max-width: 300px;
              border-radius: 10px;
              box-shadow: 0 4px 12px rgba(0,0,0,0.1);
              overflow: hidden;
              transition: transform 0.3s ease;
              margin-top:65px;
            }

            .event-card:hover {
              transform: translateY(-5px);
              box-shadow: 0 8px 20px rgba(0,0,0,0.2);
            }

            .event-card img {
              width: 100%;
              height:25vh;
                background-size:cover;
            }

            .event-details {
              padding: 15px;
            }

            .event-details h3 {
              margin: 0 0 10px;
              font-size: 18px;
              color: #444;
            }

            .event-details p {
              margin: 0;
              font-size: 14px;
              color: #666;
            }

            @media (max-width: 600px) {
              .card-container {
                flex-direction: column;
                align-items: center;
              }
              .event-card{
                  margin-top:40px;
              }
            }
           
          </style>
        </head>
        <body>
          <header>DHANALAKSHMI SRINIVASAN UNIVERSITY</header>
             <div class="card-container" >
            <div class="event-card">
             <h3>About</h3>
              <p><ul>
              <li>The AI & ML department was launched in 2022 to meet the growing demand for emerging technologies.</li>
              <li>Classroom learning combined with hands-on sessions.</li>
              <li>Highly qualified and experienced, focused on delivering top-tier education and practical training.</li>
              <li>Workshops, seminars, and symposiums to foster industry-academia collaboration.</li>
              <li>To be a Centre of Excellence for innovation and research in computer science and engineering.</li>
              </ul></p>
            </div>
            
            <div class="event-card">
             <h3>Academic Curriculum</h3>
              <p><ul>
              <li>Courses in Machine Learning, Deep Learning, Data Analytics, NLP, Computer Vision</li>
              <li>Programming languages like Python, R, and tools like TensorFlow, Hadoop</li>
              <li>integration of theory with hands-on labs and real-world projects</li>
              </ul></p>
            </div>
            
            <div class="event-card">
            <h3>Research & Innovation</h3>
              <p><ul>
              <li>Focus on emerging areas like Generative AI, AR/VR, Robotics, and Predictive Analytics
              </li>
              <li>Student and faculty publications, patents, and funded research projects</li>
              <li>Collaboration with industry and academia for joint research initiatives</li></ul></p>
            </div>
            
            <div class="event-card">
            <h3>Career Opportunities</h3>
              <p><ul>
              <li>Roles like Data Scientist, ML Engineer, AI Architect, Business Analyst
              </li>
              <li>Placement partnerships with top tech firms and startups</li>
              <li>Internship programs and career guidance cells</li></ul></p>
            </div>
            
            <div class="event-card">
            <h3>Infrastructure & Labs</h3>
              <p><ul>
              <li>State-of-the-art computing labs with GPU clusters
              </li>
              <li>Access to cloud platforms and data repositories</li>
              <li>Smart classrooms and innovation hubs</li></ul></p>
            </div>
            
            <div class="event-card">
           <h3>Faculty & Mentorship</h3>
              <p><ul>
              <li>Experienced faculty with industry and research backgrounds
              </li>
              <li>Continuous professional development and global collaborations</li>
            
            
          </div>
          

         
        </body>
        </html>
      `);
        newPage.document.close();
    };
});


const cys = ["overview-cys"];

cys.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        newPage.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>CYS</title>
          <style>
            body {
              margin:0;
              font-family: 'Segoe UI', sans-serif;
              background-color: #f4f4f4;
            }

            header {
            width:100%;
              position:fixed;
              background-color:yellow;
              font-weight:bold;
              color:darkblue;
              padding: 20px;
              text-align: center;
              font-size: 2em;
              box-shadow: 0 4px 6px rgba(0,0,0,0.3);
              
            }


          h3 {
              text-align: center;
              color: #333;
              margin-bottom: 20px;
            }

            .card-container {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              gap: 20px;
             
            }

            .event-card {
              background: white;
              width: 100%;
              max-width: 300px;
              border-radius: 10px;
              box-shadow: 0 4px 12px rgba(0,0,0,0.1);
              overflow: hidden;
              transition: transform 0.3s ease;
              margin-top:65px;
            }

            .event-card:hover {
              transform: translateY(-5px);
              box-shadow: 0 8px 20px rgba(0,0,0,0.2);
            }

            .event-card img {
              width: 100%;
              height:25vh;
                background-size:cover;
            }

            .event-details {
              padding: 15px;
            }

            .event-details h3 {
              margin: 0 0 10px;
              font-size: 18px;
              color: #444;
            }

            .event-details p {
              margin: 0;
              font-size: 14px;
              color: #666;
            }

            @media (max-width: 600px) {
              .card-container {
                flex-direction: column;
                align-items: center;
              }
              .event-card{
                  margin-top:40px;
              }
            }
           
          </style>
        </head>
        <body>
          <header>DHANALAKSHMI SRINIVASAN UNIVERSITY</header>
             <div class="card-container" >
            <div class="event-card">
             <h3>About</h3>
              <p><ul>
              <li>The CYBER SECURITY department was launched in 2022 to meet the growing demand for emerging technologies.</li>
              <li>Classroom learning combined with hands-on sessions.</li>
              <li>Highly qualified and experienced, focused on delivering top-tier education and practical training.</li>
              <li>Workshops, seminars, and symposiums to foster industry-academia collaboration.</li>
              <li>To be a Centre of Excellence for innovation and research in computer science and engineering.</li>
              </ul></p>
            </div>
            
            <div class="event-card">
             <h3>Academic Curriculum</h3>
              <p><ul>
              <li>Core subjects: Cryptography, Ethical Hacking, Network Security, Cyber Forensics, Secure Programming</li>
              <li>Programming: C, Python, Java, Full Stack (MERN), and scripting for automation</li>
              <li>Hands-on labs with tools like Wireshark, Kali Linux, Metasploit, and EC-Council modules</li>
              </ul></p>
            </div>
            
            <div class="event-card">
            <h3>Research & Innovation</h3>
              <p><ul>
              <li>Focus on emerging areas like Generative AI, AR/VR, Robotics, and Predictive Analytics
              </li>
              <li>Student and faculty publications, patents, and funded research projects</li>
              <li>Collaboration with industry and academia for joint research initiatives</li></ul></p>
            </div>
            
            <div class="event-card">
            <h3>Career Opportunities</h3>
              <p><ul>
              <li>Cybersecurity Analyst, Ethical Hacker, Security Architect, Cloud Security Engineer
              </li>
              <li>Opportunities in MNCs, defense, government agencies, and startups</li>
              <li>Support for certifications like CEH, CISSP, CompTIA Security+</li></ul></p>
            </div>
            
            <div class="event-card">
            <h3>Infrastructure & Labs</h3>
              <p><ul>
              <li>State-of-the-art computing labs with GPU clusters
              </li>
              <li>Access to cloud platforms and data repositories</li>
              <li>Smart classrooms and innovation hubs</li></ul></p>
            </div>
            
            <div class="event-card">
           <h3>Faculty & Mentorship</h3>
              <p><ul>
              <li>Experienced faculty with industry and research backgrounds
              </li>
              <li>Continuous professional development and global collaborations</li>
            
            
          </div>
          

         
        </body>
        </html>
      `);
        newPage.document.close();
    };
});



const it = ["overview-it"];

it.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        newPage.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>IT</title>
          <style>
            body {
              margin:0;
              font-family: 'Segoe UI', sans-serif;
              background-color: #f4f4f4;
            }

            header {
            width:100%;
              position:fixed;
              background-color:yellow;
              font-weight:bold;
              color:darkblue;
              padding: 20px;
              text-align: center;
              font-size: 2em;
              box-shadow: 0 4px 6px rgba(0,0,0,0.3);
              
            }


          h3 {
              text-align: center;
              color: #333;
              margin-bottom: 20px;
            }

            .card-container {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              gap: 20px;
             
            }

            .event-card {
              background: white;
              width: 100%;
              max-width: 300px;
              border-radius: 10px;
              box-shadow: 0 4px 12px rgba(0,0,0,0.1);
              overflow: hidden;
              transition: transform 0.3s ease;
              margin-top:65px;
            }

            .event-card:hover {
              transform: translateY(-5px);
              box-shadow: 0 8px 20px rgba(0,0,0,0.2);
            }

            .event-card img {
              width: 100%;
              height:25vh;
                background-size:cover;
            }

            .event-details {
              padding: 15px;
            }

            .event-details h3 {
              margin: 0 0 10px;
              font-size: 18px;
              color: #444;
            }

            .event-details p {
              margin: 0;
              font-size: 14px;
              color: #666;
            }

            @media (max-width: 600px) {
              .card-container {
                flex-direction: column;
                align-items: center;
              }
              .event-card{
                  margin-top:40px;
              }
            }
           
          </style>
        </head>
        <body>
          <header>DHANALAKSHMI SRINIVASAN UNIVERSITY</header>
             <div class="card-container" >
            <div class="event-card">
              <h3>About</h3>
              <p><ul>
              <li>The IT department was launched in 2022 to meet the growing demand for emerging technologies.</li>
              <li>Classroom learning combined with hands-on sessions.</li>
              <li>Highly qualified and experienced, focused on delivering top-tier education and practical training.</li>
              <li>Workshops, seminars, and symposiums to foster industry-academia collaboration.</li>
              <li>To be a Centre of Excellence for innovation and research in computer science and engineering.</li>
              </ul></p>
            </div>
            
            <div class="event-card">
              <h3>Academic Curriculum</h3>
              <p><ul>
              <li>Programming (C, Java, Python), Data Structures, Web Technologies, Software Engineering, Database Management, Cloud Computing</li>
              <li>Emerging tech: Artificial Intelligence, Cybersecurity, Data Analytics, IoT, Blockchain</li>
              <li>Electives and open courses to encourage interdisciplinary learning</li>
              </ul></p>
            </div>
            
            <div class="event-card">
            <h3>Research & Innovation</h3>
              <p><ul>
              <li>Focus on emerging areas like Generative AI, AR/VR, Robotics, and Predictive Analytics
              </li>
              <li>Student and faculty publications, patents, and funded research projects</li>
              <li>Collaboration with industry and academia for joint research initiatives</li></ul></p>
            </div>
            
            <div class="event-card">
            <h3>Career Opportunities</h3>
              <p><ul>
              <li>Software Developer, Data Analyst, IT Consultant, Cloud Engineer, Cybersecurity Specialist
              </li>
              <li>Strong placement record with top tech firms and startups</li>
              <li>Support for certifications like AWS, Azure, Google Cloud, and Red Hat</li></ul></p>
            </div>
            
            <div class="event-card">
            <h3>Infrastructure & Labs</h3>
              <p><ul>
              <li>State-of-the-art computing labs with GPU clusters
              </li>
              <li>Access to cloud platforms and data repositories</li>
              <li>Smart classrooms and innovation hubs</li></ul></p>
            </div>
            
            <div class="event-card">
           <h3>Faculty & Mentorship</h3>
              <p><ul>
              <li>Experienced faculty with industry and research backgrounds
              </li>
              <li>Continuous professional development and global collaborations</li>
            
            
          </div>
          

         
        </body>
        </html>
      `);
        newPage.document.close();
    };
});







const cse = ["overview-cse"];

cse.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        newPage.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          
          <style>
            body {
              margin:0;
              font-family: 'Segoe UI', sans-serif;
              background-color: #f4f4f4;
            }

            header {
            width:100%;
              position:fixed;
              background-color:yellow;
              font-weight:bold;
              color:darkblue;
              padding: 20px;
              text-align: center;
              font-size: 2em;
              box-shadow: 0 4px 6px rgba(0,0,0,0.3);
              
            }


          h3 {
              text-align: center;
              color: #333;
              margin-bottom: 20px;
            }

            .card-container {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              gap: 20px;
             
            }

            .event-card {
              background: white;
              width: 100%;
              max-width: 300px;
              border-radius: 10px;
              box-shadow: 0 4px 12px rgba(0,0,0,0.1);
              overflow: hidden;
              transition: transform 0.3s ease;
              margin-top:65px;
            }

            .event-card:hover {
              transform: translateY(-5px);
              box-shadow: 0 8px 20px rgba(0,0,0,0.2);
            }

            .event-card img {
              width: 100%;
              height:25vh;
                background-size:cover;
            }

            .event-details {
              padding: 15px;
            }

            .event-details h3 {
              margin: 0 0 10px;
              font-size: 18px;
              color: #444;
            }

            .event-details p {
              margin: 0;
              font-size: 14px;
              color: #666;
            }

            @media (max-width: 600px) {
              .card-container {
                flex-direction: column;
                align-items: center;
              }
              .event-card{
                  margin-top:40px;
              }
            }
           
          </style>
        </head>
        <body>
          <header>DHANALAKSHMI SRINIVASAN UNIVERSITY</header>
             <div class="card-container" >
            <div class="event-card">
              <h3>About</h3>
              <p><ul>
              <li>The CSE department was launched in 2022 to meet the growing demand for emerging technologies.</li>
              <li>Classroom learning combined with hands-on sessions.</li>
              <li>Highly qualified and experienced, focused on delivering top-tier education and practical training.</li>
              <li>Workshops, seminars, and symposiums to foster industry-academia collaboration.</li>
              <li>To be a Centre of Excellence for innovation and research in computer science and engineering.</li>
              </ul></p>
            </div>
            
            <div class="event-card">
              <h3>Academic Curriculum</h3>
              <p><ul>
              <li>Programming (C, Java, Python), Data Structures, Web Technologies, Software Engineering, Database Management, Cloud Computing</li>
              <li>Emerging tech: Artificial Intelligence, Cybersecurity, Data Analytics, IoT, Blockchain</li>
              <li>Electives and open courses to encourage interdisciplinary learning</li>
              </ul></p>
            </div>
            
            <div class="event-card">
           <h3>Research & Innovation</h3>
              <p><ul>
              <li>Focus on emerging areas like Generative AI, AR/VR, Robotics, and Predictive Analytics
              </li>
              <li>Student and faculty publications, patents, and funded research projects</li>
              <li>Collaboration with industry and academia for joint research initiatives</li></ul></p>
            </div>
            
            <div class="event-card">
           <h3>Career Opportunities</h3>
              <p><ul>
              <li>Software Developer, Data Analyst, IT Consultant, Cloud Engineer, Cybersecurity Specialist
              </li>
              <li>Strong placement record with top tech firms and startups</li>
              <li>Support for certifications like AWS, Azure, Google Cloud, and Red Hat</li></ul></p>
            </div>
            
            <div class="event-card">
            <h3>Infrastructure & Labs</h3>
              <p><ul>
              <li>State-of-the-art computing labs with GPU clusters
              </li>
              <li>Access to cloud platforms and data repositories</li>
              <li>Smart classrooms and innovation hubs</li></ul></p>
            </div>
            
            <div class="event-card">
           <h3>Faculty & Mentorship</h3>
              <p><ul>
              <li>Experienced faculty with industry and research backgrounds
              </li>
              <li>Continuous professional development and global collaborations</li>
            
            
          </div>
          

         
        </body>
        </html>
      `);
        newPage.document.close();
    };
});




const iot = ["overview-iot"];

iot.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        newPage.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          
          <style>
            body {
              margin:0;
              font-family: 'Segoe UI', sans-serif;
              background-color: #f4f4f4;
            }

            header {
            width:100%;
              position:fixed;
              background-color:yellow;
              font-weight:bold;
              color:darkblue;
              padding: 20px;
              text-align: center;
              font-size: 2em;
              box-shadow: 0 4px 6px rgba(0,0,0,0.3);
              
            }


          h3 {
              text-align: center;
              color: #333;
              margin-bottom: 20px;
            }

            .card-container {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              gap: 20px;
             
            }

            .event-card {
              background: white;
              width: 100%;
              max-width: 300px;
              border-radius: 10px;
              box-shadow: 0 4px 12px rgba(0,0,0,0.1);
              overflow: hidden;
              transition: transform 0.3s ease;
              margin-top:65px;
            }

            .event-card:hover {
              transform: translateY(-5px);
              box-shadow: 0 8px 20px rgba(0,0,0,0.2);
            }

            .event-card img {
              width: 100%;
              height:25vh;
                background-size:cover;
            }

            .event-details {
              padding: 15px;
            }

            .event-details h3 {
              margin: 0 0 10px;
              font-size: 18px;
              color: #444;
            }

            .event-details p {
              margin: 0;
              font-size: 14px;
              color: #666;
            }

            @media (max-width: 600px) {
              .card-container {
                flex-direction: column;
                align-items: center;
              }
              .event-card{
                  margin-top:40px;
              }
            }
           
          </style>
        </head>
        <body>
          <header>DHANALAKSHMI SRINIVASAN UNIVERSITY</header>
             <div class="card-container" >
            <div class="event-card">
               <h3>About</h3>
              <p><ul>
              <li>The IOT department was launched in 2022 to meet the growing demand for emerging technologies.</li>
              <li>Classroom learning combined with hands-on sessions.</li>
              <li>Highly qualified and experienced, focused on delivering top-tier education and practical training.</li>
              <li>Workshops, seminars, and symposiums to foster industry-academia collaboration.</li>
              <li>To be a Centre of Excellence for innovation and research in computer science and engineering.</li>
              </ul></p>
            </div>
            
            <div class="event-card">
              <h3>Academic Curriculum</h3>
              <p><ul>
              <li>Programming (C, Java, Python), Data Structures, Web Technologies, Software Engineering, Database Management, Cloud Computing</li>
              <li>Emerging tech: Artificial Intelligence, Cybersecurity, Data Analytics, IoT, Blockchain</li>
              <li>Electives and open courses to encourage interdisciplinary learning</li>
              </ul></p>
            </div>
            
            <div class="event-card">
            <h3>Research & Innovation</h3>
              <p><ul>
              <li>Student and faculty research in emerging areas like blockchain, IoT, and smart systems
              </li>
              <li>Participation in hackathons, coding contests, and innovation challenges</li>
              <li>Funded projects and academic publications</li></ul></p>
            </div>
            
            <div class="event-card">
           <h3>Career Opportunities</h3>
              <p><ul>
              <li>Roles: Software Developer, Data Analyst, IT Consultant, Cloud Engineer, Cybersecurity Specialist
              </li>
              <li>Strong placement record with top tech firms and startups</li>
              <li>Support for certifications like AWS, Azure, Google Cloud, and Red Hat</li></ul></p>
            </div>
            
            <div class="event-card">
            <h3>Infrastructure & Labs</h3>
              <p><ul>
              <li>State-of-the-art computing labs with GPU clusters
              </li>
              <li>Access to cloud platforms and data repositories</li>
              <li>Smart classrooms and innovation hubs</li></ul></p>
            </div>
            
            <div class="event-card">
           <h3>Faculty & Mentorship</h3>
              <p><ul>
              <li>Experienced faculty with industry and research backgrounds
              </li>
              <li>Continuous professional development and global collaborations</li>
            
            
          </div>
          

         
        </body>
        </html>
      `);
        newPage.document.close();
    };
});


const agri = ["overview-agri"];

agri.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        newPage.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          
          <style>
            body {
              margin:0;
              font-family: 'Segoe UI', sans-serif;
              background-color: #f4f4f4;
            }

            header {
            width:100%;
              position:fixed;
              background-color:yellow;
              font-weight:bold;
              color:darkblue;
              padding: 20px;
              text-align: center;
              font-size: 2em;
              box-shadow: 0 4px 6px rgba(0,0,0,0.3);
              
            }


          h3 {
              text-align: center;
              color: #333;
              margin-bottom: 20px;
            }

            .card-container {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              gap: 20px;
             
            }

            .event-card {
              background: white;
              width: 100%;
              max-width: 300px;
              border-radius: 10px;
              box-shadow: 0 4px 12px rgba(0,0,0,0.1);
              overflow: hidden;
              transition: transform 0.3s ease;
              margin-top:65px;
            }

            .event-card:hover {
              transform: translateY(-5px);
              box-shadow: 0 8px 20px rgba(0,0,0,0.2);
            }

            .event-card img {
              width: 100%;
              height:25vh;
                background-size:cover;
            }

            .event-details {
              padding: 15px;
            }

            .event-details h3 {
              margin: 0 0 10px;
              font-size: 18px;
              color: #444;
            }

            .event-details p {
              margin: 0;
              font-size: 14px;
              color: #666;
            }

            @media (max-width: 600px) {
              .card-container {
                flex-direction: column;
                align-items: center;
              }
              .event-card{
                  margin-top:40px;
              }
            }
           
          </style>
        </head>
        <body>
          <header>DHANALAKSHMI SRINIVASAN UNIVERSITY</header>
             <div class="card-container" >
            <div class="event-card">
               <h3>About</h3>
              <p><ul>
              <li>The AGRI department was launched in 2022 to meet the growing demand for emerging technologies.</li>
              <li>Classroom learning combined with hands-on sessions.</li>
              <li>Highly qualified and experienced, focused on delivering top-tier education and practical training.</li>
              <li>Workshops, seminars, and symposiums to foster industry-academia collaboration.</li>
              <li>To be a Centre of Excellence for innovation and research in computer science and engineering.</li>
              </ul></p>
            </div>
            
            <div class="event-card">
             <h3>Academic Curriculum</h3>
              <p><ul>
              <li>Farm Machinery & Power</li>
              <li>Soil & Water Conservation</li>
              <li>Irrigation & Drainage Engineering</li>
              <li>Food Processing & Post-Harvest Technology</li>
              <li>GIS & Remote Sensing</li>
              <li>Agricultural Information Technology</li>
              </ul></p>
            </div>
            
            <div class="event-card">
           <h3>Research & Innovation</h3>
              <p><ul>
              <li>Projects in smart irrigation, drone-based crop monitoring, and renewable energy for farms
              </li>
              <li>Collaboration with government bodies and agritech startups</li>
              <li>Patents, publications, and sponsored research in sustainable agriculture</li></ul></p>
            </div>
            
            <div class="event-card">
           <h3>Career Opportunities</h3>
              <p><ul>
              <li>Agricultural Equipment Design
              </li>
              <li>Irrigation System Engineering</li>
              <li>Food Processing & Packaging</li>
               <li>Soil & Water Conservation</li>
               <li>Renewable Energy Systems</li></ul></p>
            </div>
            
            <div class="event-card">
            <h3>Infrastructure & Labs</h3>
              <p><ul>
              <li>State-of-the-art computing labs with GPU clusters
              </li>
              <li>Access to cloud platforms and data repositories</li>
              <li>Smart classrooms and innovation hubs</li></ul></p>
            </div>
            
            <div class="event-card">
           <h3>Faculty & Mentorship</h3>
              <p><ul>
              <li>Experienced faculty with industry and research backgrounds
              </li>
              <li>Continuous professional development and global collaborations</li>
            
            
          </div>
          

         
        </body>
        </html>
      `);
        newPage.document.close();
    };
});


const biomed = ["overview-biomed"];

biomed.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        newPage.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          
          <style>
            body {
              margin:0;
              font-family: 'Segoe UI', sans-serif;
              background-color: #f4f4f4;
            }

            header {
            width:100%;
              position:fixed;
              background-color:yellow;
              font-weight:bold;
              color:darkblue;
              padding: 20px;
              text-align: center;
              font-size: 2em;
              box-shadow: 0 4px 6px rgba(0,0,0,0.3);
              
            }


          h3 {
              text-align: center;
              color: #333;
              margin-bottom: 20px;
            }

            .card-container {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              gap: 20px;
             
            }

            .event-card {
              background: white;
              width: 100%;
              max-width: 300px;
              border-radius: 10px;
              box-shadow: 0 4px 12px rgba(0,0,0,0.1);
              overflow: hidden;
              transition: transform 0.3s ease;
              margin-top:65px;
            }

            .event-card:hover {
              transform: translateY(-5px);
              box-shadow: 0 8px 20px rgba(0,0,0,0.2);
            }

            .event-card img {
              width: 100%;
              height:25vh;
                background-size:cover;
            }

            .event-details {
              padding: 15px;
            }

            .event-details h3 {
              margin: 0 0 10px;
              font-size: 18px;
              color: #444;
            }

            .event-details p {
              margin: 0;
              font-size: 14px;
              color: #666;
            }

            @media (max-width: 600px) {
              .card-container {
                flex-direction: column;
                align-items: center;
              }
              .event-card{
                  margin-top:40px;
              }
            }
           
          </style>
        </head>
        <body>
          <header>DHANALAKSHMI SRINIVASAN UNIVERSITY</header>
             <div class="card-container" >
            <div class="event-card">
               <h3>About</h3>
              <p><ul>
              <li>The BIOMEDICAL department was launched in 2022 to meet the growing demand for emerging technologies.</li>
              <li>Classroom learning combined with hands-on sessions.</li>
              <li>Highly qualified and experienced, focused on delivering top-tier education and practical training.</li>
              <li>Workshops, seminars, and symposiums to foster industry-academia collaboration.</li>
              <li>To be a Centre of Excellence for innovation and research in computer science and engineering.</li>
              </ul></p>
            </div>
            
            <div class="event-card">
             <h3>Academic Curriculum</h3>
              <p><ul>
              <li>Human Anatomy & Physiology</li>
              <li>Biomedical Instrumentation</li>
              <li>Medical Imaging Systems</li>
              <li>Biomechanics & Biomaterials</li>
              <li>Biosignal Processing</li>
              <li>Artificial Intelligence in Healthcare</li>
              </ul></p>
            </div>
            
            <div class="event-card">
          <h3>Research & Innovation</h3>
              <p><ul>
              <li>Projects in prosthetics, diagnostic devices, bioinformatics, and AI-based health monitoring
              </li>
              <li>Collaboration with hospitals, research labs, and medical device companies</li>
              <li>Patents, publications, and student-led startups in healthcare tech</li></ul></p>
            </div>
            
            <div class="event-card">
           <h3>Career Opportunities</h3>
              <p><ul>
              <li>Roles: Biomedical Engineer, Clinical Engineer, R&D Specialist, Regulatory Affairs Analyst
              </li>
              <li>Opportunities in hospitals, medical device companies, research labs, and government agencies</li>
              <li>Support for certifications and higher studies in biomedical sciences and healthcare technology</li>
              </ul></p>
            </div>
            
            <div class="event-card">
            <h3>Infrastructure & Labs</h3>
              <p><ul>
              <li>State-of-the-art computing labs with GPU clusters
              </li>
              <li>Access to cloud platforms and data repositories</li>
              <li>Smart classrooms and innovation hubs</li></ul></p>
            </div>
            
            <div class="event-card">
           <h3>Faculty & Mentorship</h3>
              <p><ul>
              <li>Experienced faculty with industry and research backgrounds
              </li>
              <li>Continuous professional development and global collaborations</li>
            
            
          </div>
          

         
        </body>
        </html>
      `);
        newPage.document.close();
    };
});




const biotech = ["overview-biotech"];

biotech.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        newPage.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          
          <style>
            body {
              margin:0;
              font-family: 'Segoe UI', sans-serif;
              background-color: #f4f4f4;
            }

            header {
            width:100%;
              position:fixed;
              background-color:yellow;
              font-weight:bold;
              color:darkblue;
              padding: 20px;
              text-align: center;
              font-size: 2em;
              box-shadow: 0 4px 6px rgba(0,0,0,0.3);
              
            }


          h3 {
              text-align: center;
              color: #333;
              margin-bottom: 20px;
            }

            .card-container {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              gap: 20px;
             
            }

            .event-card {
              background: white;
              width: 100%;
              max-width: 300px;
              border-radius: 10px;
              box-shadow: 0 4px 12px rgba(0,0,0,0.1);
              overflow: hidden;
              transition: transform 0.3s ease;
              margin-top:65px;
            }

            .event-card:hover {
              transform: translateY(-5px);
              box-shadow: 0 8px 20px rgba(0,0,0,0.2);
            }

            .event-card img {
              width: 100%;
              height:25vh;
                background-size:cover;
            }

            .event-details {
              padding: 15px;
            }

            .event-details h3 {
              margin: 0 0 10px;
              font-size: 18px;
              color: #444;
            }

            .event-details p {
              margin: 0;
              font-size: 14px;
              color: #666;
            }

            @media (max-width: 600px) {
              .card-container {
                flex-direction: column;
                align-items: center;
              }
              .event-card{
                  margin-top:40px;
              }
            }
           
          </style>
        </head>
        <body>
          <header>DHANALAKSHMI SRINIVASAN UNIVERSITY</header>
             <div class="card-container" >
            <div class="event-card">
               <h3>About</h3>
              <p><ul>
              <li>The BIOTECHNOLOGY department was launched in 2022 to meet the growing demand for emerging technologies.</li>
              <li>Classroom learning combined with hands-on sessions.</li>
              <li>Highly qualified and experienced, focused on delivering top-tier education and practical training.</li>
              <li>Workshops, seminars, and symposiums to foster industry-academia collaboration.</li>
              <li>To be a Centre of Excellence for innovation and research in computer science and engineering.</li>
              </ul></p>
            </div>
            
            <div class="event-card">
            <h3>Academic Curriculum</h3>
              <p><ul>
              <li>Molecular Biology & Genetics</li>
              <li>Biochemistry & Microbiology</li>
              <li>Genetic Engineering & Recombinant DNA Technology</li>
              <li>Bioprocess Engineering</li>
              <li>Bioinformatics & Computational Biology</li>
              <li>Environmental & Plant Biotechnology</li>
              </ul></p>
            </div>
            
            <div class="event-card">
          <h3>Research & Innovation</h3>
              <p><ul>
              <li>Drug discovery and vaccine development
              </li>
              <li>Agricultural biotechnology (e.g., GM crops, biofertilizers)</li>
              <li>Environmental biotechnology (e.g., bioremediation)</li></ul></p>
            </div>
            
            <div class="event-card">
           <h3>Career Opportunities</h3>
              <p><ul>
              <li>Roles: Biotechnologist, Research Associate, Bioinformatics Analyst, Clinical Researcher, Quality Control Officer
              </li>
              <li>Industries: Pharmaceuticals, Healthcare, Agriculture, Food Processing, Environmental Agencies</li>
              <li>Support for certifications and higher studies in India and abroad</li>
              </ul></p>
            </div>
            
            <div class="event-card">
            <h3>Infrastructure & Labs</h3>
              <p><ul>
              <li>State-of-the-art computing labs with GPU clusters
              </li>
              <li>Access to cloud platforms and data repositories</li>
              <li>Smart classrooms and innovation hubs</li></ul></p>
            </div>
            
            <div class="event-card">
           <h3>Faculty & Mentorship</h3>
              <p><ul>
              <li>Experienced faculty with industry and research backgrounds
              </li>
              <li>Continuous professional development and global collaborations</li>
            
            
          </div>
          

         
        </body>
        </html>
      `);
        newPage.document.close();
    };
});


const ece = ["overview-ece"];

ece.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        newPage.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          
          <style>
            body {
              margin:0;
              font-family: 'Segoe UI', sans-serif;
              background-color: #f4f4f4;
            }

            header {
            width:100%;
              position:fixed;
              background-color:yellow;
              font-weight:bold;
              color:darkblue;
              padding: 20px;
              text-align: center;
              font-size: 2em;
              box-shadow: 0 4px 6px rgba(0,0,0,0.3);
              
            }


          h3 {
              text-align: center;
              color: #333;
              margin-bottom: 20px;
            }

            .card-container {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              gap: 20px;
             
            }

            .event-card {
              background: white;
              width: 100%;
              max-width: 300px;
              border-radius: 10px;
              box-shadow: 0 4px 12px rgba(0,0,0,0.1);
              overflow: hidden;
              transition: transform 0.3s ease;
              margin-top:65px;
            }

            .event-card:hover {
              transform: translateY(-5px);
              box-shadow: 0 8px 20px rgba(0,0,0,0.2);
            }

            .event-card img {
              width: 100%;
              height:25vh;
                background-size:cover;
            }

            .event-details {
              padding: 15px;
            }

            .event-details h3 {
              margin: 0 0 10px;
              font-size: 18px;
              color: #444;
            }

            .event-details p {
              margin: 0;
              font-size: 14px;
              color: #666;
            }

            @media (max-width: 600px) {
              .card-container {
                flex-direction: column;
                align-items: center;
              }
              .event-card{
                  margin-top:40px;
              }
            }
           
          </style>
        </head>
        <body>
          <header>DHANALAKSHMI SRINIVASAN UNIVERSITY</header>
             <div class="card-container" >
            <div class="event-card">
               <h3>About</h3>
              <p><ul>
              <li>The ECE department was launched in 2022 to meet the growing demand for emerging technologies.</li>
              <li>Classroom learning combined with hands-on sessions.</li>
              <li>Highly qualified and experienced, focused on delivering top-tier education and practical training.</li>
              <li>Workshops, seminars, and symposiums to foster industry-academia collaboration.</li>
              <li>To be a Centre of Excellence for innovation and research in computer science and engineering.</li>
              </ul></p>
            </div>
            
            <div class="event-card">
            <h3>Academic Curriculum</h3>
              <p><ul>
              <li>Analog & Digital Electronics</li>
              <li>Communication Systems</li>
              <li>Microprocessors & Microcontrollers</li>
              <li>VLSI Design</li>
              <li>Embedded Systems</li>
              <li>Signal & Image Processing</li>
              </ul></p>
            </div>
            
            <div class="event-card">
                <h3>Research & Innovation</h3>
              <p><ul>
              <li>Projects in 5G, antenna design, biomedical signal processing, and smart systems
              </li>
              <li>Funded research from DST, DRDO, ISRO, and private industries</li>
              <li>Student participation in national and international conferences, patents, and product development</li></ul></p>
            </div>
            
            <div class="event-card">
           <h3>Career Opportunities</h3>
              <p><ul>
              <li>Roles: Electronics Engineer, Communication Specialist, Embedded Systems Developer, VLSI Designer, RF Engineer
              </li>
              <li>Opportunities in telecom, aerospace, defense, consumer electronics, and R&D</li>
              <li>Support for certifications like CCNA, ARM, MATLAB, and IoT platforms</li>
              </ul></p>
            </div>
            
            <div class="event-card">
            <h3>Infrastructure & Labs</h3>
              <p><ul>
              <li>State-of-the-art computing labs with GPU clusters
              </li>
              <li>Access to cloud platforms and data repositories</li>
              <li>Smart classrooms and innovation hubs</li></ul></p>
            </div>
            
            <div class="event-card">
           <h3>Faculty & Mentorship</h3>
              <p><ul>
              <li>Experienced faculty with industry and research backgrounds
              </li>
              <li>Continuous professional development and global collaborations</li>
            
            
          </div>
          

         
        </body>
        </html>
      `);
        newPage.document.close();
    };
});




const eee = ["overview-eee"];

eee.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        newPage.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          
          <style>
            body {
              margin:0;
              font-family: 'Segoe UI', sans-serif;
              background-color: #f4f4f4;
            }

            header {
            width:100%;
              position:fixed;
              background-color:yellow;
              font-weight:bold;
              color:darkblue;
              padding: 20px;
              text-align: center;
              font-size: 2em;
              box-shadow: 0 4px 6px rgba(0,0,0,0.3);
              
            }


          h3 {
              text-align: center;
              color: #333;
              margin-bottom: 20px;
            }

            .card-container {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              gap: 20px;
             
            }

            .event-card {
              background: white;
              width: 100%;
              max-width: 300px;
              border-radius: 10px;
              box-shadow: 0 4px 12px rgba(0,0,0,0.1);
              overflow: hidden;
              transition: transform 0.3s ease;
              margin-top:65px;
            }

            .event-card:hover {
              transform: translateY(-5px);
              box-shadow: 0 8px 20px rgba(0,0,0,0.2);
            }

            .event-card img {
              width: 100%;
              height:25vh;
                background-size:cover;
            }

            .event-details {
              padding: 15px;
            }

            .event-details h3 {
              margin: 0 0 10px;
              font-size: 18px;
              color: #444;
            }

            .event-details p {
              margin: 0;
              font-size: 14px;
              color: #666;
            }

            @media (max-width: 600px) {
              .card-container {
                flex-direction: column;
                align-items: center;
              }
              .event-card{
                  margin-top:40px;
              }
            }
           
          </style>
        </head>
        <body>
          <header>DHANALAKSHMI SRINIVASAN UNIVERSITY</header>
             <div class="card-container" >
            <div class="event-card">
               <h3>About</h3>
              <p><ul>
              <li>The EEE department was launched in 2022 to meet the growing demand for emerging technologies.</li>
              <li>Classroom learning combined with hands-on sessions.</li>
              <li>Highly qualified and experienced, focused on delivering top-tier education and practical training.</li>
              <li>Workshops, seminars, and symposiums to foster industry-academia collaboration.</li>
              <li>To be a Centre of Excellence for innovation and research in computer science and engineering.</li>
              </ul></p>
            </div>
            
            <div class="event-card">
           <h3>Academic Curriculum</h3>
              <p><ul>
              <li>Circuit Theory & Electrical Machines</li>
              <li>Power Systems & Power Electronics</li>
              <li>Control Systems & Instrumentation</li>
              <li>Digital Electronics & Microprocessors</li>
              <li>Renewable Energy Systems</li>
              <li>Embedded Systems & IoT</li>
              </ul></p>
            </div>
            
            <div class="event-card">
                <h3>Research & Innovation</h3>
              <p><ul>
              <li>Solar and wind energy integration.
              </li>
              <li>Electric and hybrid vehicle systems.</li>
              <li>Smart grid and energy management</li>
              <li>Robotics and automation</li></ul></p>
            </div>
            
            <div class="event-card">
           <h3>Career Opportunities</h3>
              <p><ul>
              <li>Roles: Electrical Engineer, Power Systems Analyst, Embedded Systems Developer, Automation Engineer.
              </li>
              <li>Industries: Energy, Manufacturing, Automotive, Aerospace, IT, and Government.</li>
              <li>Support for certifications: PLC/SCADA, MATLAB, IoT, and Electric Vehicle Technologies.</li>
              </ul></p>
            </div>
            
            <div class="event-card">
            <h3>Infrastructure & Labs</h3>
              <p><ul>
              <li>State-of-the-art computing labs with GPU clusters
              </li>
              <li>Access to cloud platforms and data repositories</li>
              <li>Smart classrooms and innovation hubs</li></ul></p>
            </div>
            
            <div class="event-card">
           <h3>Faculty & Mentorship</h3>
              <p><ul>
              <li>Experienced faculty with industry and research backgrounds
              </li>
              <li>Continuous professional development and global collaborations</li>
            
            
          </div>
          

         
        </body>
        </html>
      `);
        newPage.document.close();
    };
});


const mech = ["overview-mech"];

mech.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        newPage.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          
          <style>
            body {
              margin:0;
              font-family: 'Segoe UI', sans-serif;
              background-color: #f4f4f4;
            }

            header {
            width:100%;
              position:fixed;
              background-color:yellow;
              font-weight:bold;
              color:darkblue;
              padding: 20px;
              text-align: center;
              font-size: 2em;
              box-shadow: 0 4px 6px rgba(0,0,0,0.3);
              
            }


          h3 {
              text-align: center;
              color: #333;
              margin-bottom: 20px;
            }

            .card-container {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              gap: 20px;
             
            }

            .event-card {
              background: white;
              width: 100%;
              max-width: 300px;
              border-radius: 10px;
              box-shadow: 0 4px 12px rgba(0,0,0,0.1);
              overflow: hidden;
              transition: transform 0.3s ease;
              margin-top:65px;
            }

            .event-card:hover {
              transform: translateY(-5px);
              box-shadow: 0 8px 20px rgba(0,0,0,0.2);
            }

            .event-card img {
              width: 100%;
              height:25vh;
                background-size:cover;
            }

            .event-details {
              padding: 15px;
            }

            .event-details h3 {
              margin: 0 0 10px;
              font-size: 18px;
              color: #444;
            }

            .event-details p {
              margin: 0;
              font-size: 14px;
              color: #666;
            }

            @media (max-width: 600px) {
              .card-container {
                flex-direction: column;
                align-items: center;
              }
              .event-card{
                  margin-top:40px;
              }
            }
           
          </style>
        </head>
        <body>
          <header>DHANALAKSHMI SRINIVASAN UNIVERSITY</header>
             <div class="card-container" >
            <div class="event-card">
               <h3>About</h3>
              <p><ul>
              <li>The MECH department was launched in 2022 to meet the growing demand for emerging technologies.</li>
              <li>Classroom learning combined with hands-on sessions.</li>
              <li>Highly qualified and experienced, focused on delivering top-tier education and practical training.</li>
              <li>Workshops, seminars, and symposiums to foster industry-academia collaboration.</li>
              <li>To be a Centre of Excellence for innovation and research in computer science and engineering.</li>
              </ul></p>
            </div>
            
            <div class="event-card">
           <h3>Academic Curriculum</h3>
              <p><ul>
              <li>Engineering Mechanics & Thermodynamics</li>
              <li>Fluid Mechanics & Heat Transfer</li>
              <li>Machine Design & CAD/CAM</li>
              <li>Manufacturing Processes & Industrial Engineering</li>
              <li>Robotics & Mechatronics</li>
              <li>Automotive & Aerospace Engineering</li>
              </ul></p>
            </div>
            
            <div class="event-card">
                <h3>Research & Innovation</h3>
              <p><ul>
              <li>Renewable energy systems (solar, wind, biofuel).
              </li>
              <li>Smart manufacturing and Industry 4.0.</li>
              <li>Advanced materials and composites.</li>
              <li>Automation, robotics, and mechatronics.</li></ul></p>
            </div>
            
            <div class="event-card">
           <h3>Career Opportunities</h3>
              <p><ul>
              <li>Roles: Design Engineer, Thermal Analyst, Production Manager, R&D Engineer, Maintenance Engineer.
              </li>
              <li>Industries: Automotive, Aerospace, Energy, Manufacturing, Defense, and Robotics.</li>
              <li>Support for certifications: CAD/CAM, Six Sigma, Lean Manufacturing, and IoT in Mechanical Systems.</li>
              </ul></p>
            </div>
            
            <div class="event-card">
            <h3>Infrastructure & Labs</h3>
              <p><ul>
              <li>State-of-the-art computing labs with GPU clusters
              </li>
              <li>Access to cloud platforms and data repositories</li>
              <li>Smart classrooms and innovation hubs</li></ul></p>
            </div>
            
            <div class="event-card">
           <h3>Faculty & Mentorship</h3>
              <p><ul>
              <li>Experienced faculty with industry and research backgrounds
              </li>
              <li>Continuous professional development and global collaborations</li>
            
            
          </div>
          

         
        </body>
        </html>
      `);
        newPage.document.close();
    };
});

const aidssylabus = ["aids-sylabus"];

aidssylabus.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");



        newPage.document.write(`
          <html>
            <head>
              <title>aids_sys-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  h2 {
                      text-align: center;
                      margin-bottom: 20px;
                    }
                 header {
                 position:fixed;
                 width:100%;
              background-color:yellow;
              font-weight:bold;
              color:darkblue;
              padding: 20px;
              text-align: center;
              font-size: 2em;
              box-shadow: 0 4px 6px rgba(0,0,0,0.3);
            }
                    table {
                      width: 100%;
                      border-collapse: collapse;
                      box-shadow: 0 0 10px rgba(0,0,0,0.1);
                      background-color: #fff;
                    }
                
                    th, td {
                      padding: 12px;
                      border: 1px solid #ddd;
                      text-align: center;
                    }
                
                    th {
                      background-color: #0077b6;
                      color: white;
                    }
                
                    tr:hover {
                      background-color: #caf0f8;
                      cursor: pointer;
                      transition: background-color 0.3s ease;
                    }
                    tr:active {
                      background-color: #90e0ef;
                    }
                }
              </style>
            </head>
            <body>
            <header>DHANALAKSHMI SRINIVASAN UNIVERSITY</header>
              <div style="height:100%; padding:40px; text-align:left;overflow-y: auto;">
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; margin-top:60px; mb-3">SEMESTER-I</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21ENG01</td>
                                <td>Basics In Communication</td>
                                <td>HS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>1</td>
                                <td>4</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21MAT01</td>
                                <td>Algebra and Calculus</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>23PHY01</td>
                                <td>Engineering Physics</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21GEN01</td>
                                <td>Engineering Graphics & Design</td>
                                <td>ES</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>5</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21ACY01</td>
                                    <td>Python Programming</td>
                                    <td>ES</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21PHYP1</td>
                                    <td>Engineering Physics Laboratory</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21ACYP1</td>
                                    <td>Python Programming Laboratory</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21YOG01</td>
                                    <td>Yoga</td>
                                    <td>MC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>0</td>
                                  </tr>
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-II</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21ENG02</td>
                                <td>Technical Communication</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21MAT02</td>
                                <td>Advanced Calculus and ODE</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21CHY01</td>
                                <td>Engineering Chemistry</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21GEN03</td>
                                <td>Basic Electrical & Electronics Engineering</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21CSE01</td>
                                    <td>Programming in C</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21AID01</td>
                                    <td>Java Programming</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21GEN05</td>
                                    <td>Workshop Practices</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21CHYP1</td>
                                    <td>Engineering Chemistry Laboratory</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21ENGP2</td>
                                    <td>Communication Skills Laboratory</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>10</td>
                                    <td>21AIDP1</td>
                                    <td>Java Programming Lab</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>11</td>
                                    <td>21CSEP1</td>
                                    <td>Programming in C Laboratory</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>12</td>
                                    <td>21NCP02</td>
                                    <td>NSS</td>
                                    <td>NC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>0</td>
                                  </tr>
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                    <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-III</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21MAT03</td>
                                <td>Discrete Structures</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21AID02</td>
                                <td>Foundations of Artificial Intelligence</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21CSE05</td>
                                <td>Computer Architecture</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21ECE61</td>
                                <td>Analog and Digital Electronics</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21CSE02</td>
                                    <td>Data Structures</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21ACY02</td>
                                    <td>RDBMS & MySQL</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21ENG03</td>
                                    <td>Professional Communication</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21CSEP3</td>
                                    <td>Data structures Lab</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21AIDP2</td>
                                    <td>Artificial Intelligence Lab</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>10</td>
                                    <td>21ACYP2</td>
                                    <td>RDBMS & MySQL Lab</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>11</td>
                                    <td>21NCP03</td>
                                    <td>Environmental Science</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                 <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-IV</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21MAT06</td>
                                <td>Probability and Statistics</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21AID03</td>
                                <td>Foundations of Data Science</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21CSE07</td>
                                <td>Design and Analysis of Algorithms</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21CSE06</td>
                                <td>Operating System</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21CSE11</td>
                                    <td>Computer Networks</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21AID04</td>
                                    <td>Microservices Architecture and implementation</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21ENG04</td>
                                    <td>Advanced Technical Communication</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21CSEP8</td>
                                    <td>Computer Networks lab</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21CSEP6</td>
                                    <td>Operating System lab</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>10</td>
                                    <td>21AIDP3</td>
                                    <td>Microservices Architecture & implementation Lab</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>11</td>
                                    <td>21NCP04</td>
                                    <td>Renewable Energy Source</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-V</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21AID05</td>
                                <td>Data Visualization (R, Python, Watson Studio)</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21INT02</td>
                                <td>Web Programming</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21AML03</td>
                                <td>Deep Learning and its applications</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21AID06</td>
                                <td>Algorithm for Intelligent Systems</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td></td>
                                    <td>Professional Elective-I</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21UHV02</td>
                                    <td>Universal Human Values 2: Understanding Harmony</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21AIDP4</td>
                                    <td>Data Visualization (R, Python, Watson Studio) Lab</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21INTP1</td>
                                    <td>Web Programming Lab</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21ENGP3</td>
                                    <td>Professional Communication Lab</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>10</td>
                                    <td>21NCP05</td>
                                    <td>Essence of Indian Traditional Knowledge</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VI</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21CSE12</td>
                                <td>Mobile Computing</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21INT01</td>
                                <td>Information Retrieval Systems</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td></td>
                                <td>Professional Elective-II</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td></td>
                                <td>Open Elective-I</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21AID07</td>
                                    <td>Predictive Modeling</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21AIDP5</td>
                                    <td>Predictive Modeling Lab</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21INTP2</td>
                                    <td>Mobile Application Development Lab</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21CYSMP</td>
                                    <td>Mini Project</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VII</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21GEN06</td>
                                <td>Disaster Management</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td></td>
                                <td>Open Elective-II</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td></td>
                                <td>Professional Elective-III</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td></td>
                                <td>Professional Elective-IV</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21AID08</td>
                                    <td>Machine Learning using Watson Studio</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21AIDP6</td>
                                    <td>Machine Learning using Watson Studio Lab</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21AIDIN</td>
                                    <td>Internship & Publication</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  
                                  
                                
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                  
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VIII</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td></td>
                                <td>Professional Elective-V</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21AID09</td>
                                <td>AI Analyst – AP skills</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21AIDP7</td>
                                <td>AI Analyst – AP skills Lab</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21AIDPW</td>
                                <td>Project Work</td>
                                <td>EEC</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
            </div> 
              
             
              
              
            </body>
          </html>
        `);
        newPage.document.close();
    };

});


const aimlsylabus = ["aiml-sylabus"];

aimlsylabus.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");



        newPage.document.write(`
          <html>
            <head>
              <title>aiml_sys-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  h2 {
                      text-align: center;
                      margin-bottom: 20px;
                    }
                 header {
                 position:fixed;
                 width:100%;
              background-color:yellow;
              font-weight:bold;
              color:darkblue;
              padding: 20px;
              text-align: center;
              font-size: 2em;
              box-shadow: 0 4px 6px rgba(0,0,0,0.3);
            }
                    table {
                      width: 100%;
                      border-collapse: collapse;
                      box-shadow: 0 0 10px rgba(0,0,0,0.1);
                      background-color: #fff;
                    }
                
                    th, td {
                      padding: 12px;
                      border: 1px solid #ddd;
                      text-align: center;
                    }
                
                    th {
                      background-color: #0077b6;
                      color: white;
                    }
                
                    tr:hover {
                      background-color: #caf0f8;
                      cursor: pointer;
                      transition: background-color 0.3s ease;
                    }
                    tr:active {
                      background-color: #90e0ef;
                    }
                }
              </style>
            </head>
            <body>
            <header>DHANALAKSHMI SRINIVASAN UNIVERSITY</header>
              <div style="height:100%; padding:40px; text-align:left;overflow-y: auto;">
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; margin-top:60px; mb-3">SEMESTER-I</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21ENG01</td>
                                <td>Basics In Communication</td>
                                <td>HS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>1</td>
                                <td>4</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21MAT01</td>
                                <td>Algebra and Calculus</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>23PHY01</td>
                                <td>Engineering Physics</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21GEN01</td>
                                <td>Engineering Graphics & Design</td>
                                <td>ES</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>5</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21ACY01</td>
                                    <td>Python Programming</td>
                                    <td>ES</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21PHYP1</td>
                                    <td>Engineering Physics Laboratory</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21ACYP1</td>
                                    <td>Python Programming Laboratory</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21YOG01</td>
                                    <td>Yoga</td>
                                    <td>MC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>0</td>
                                  </tr>
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-II</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21ENG02</td>
                                <td>Technical Communication</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21MAT02</td>
                                <td>Advanced Calculus and ODE</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21CHY01</td>
                                <td>Engineering Chemistry</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21GEN03</td>
                                <td>Basic Electrical & Electronics Engineering</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21CSE01</td>
                                    <td>Programming in C</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21AID01</td>
                                    <td>Java Programming</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21GEN05</td>
                                    <td>Workshop Practices</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21CHYP1</td>
                                    <td>Engineering Chemistry Laboratory</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21ENGP2</td>
                                    <td>Communication Skills Laboratory</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>10</td>
                                    <td>21AIDP1</td>
                                    <td>Java Programming Lab</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>11</td>
                                    <td>21CSEP1</td>
                                    <td>Programming in C Laboratory</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>12</td>
                                    <td>21NCP02</td>
                                    <td>NSS</td>
                                    <td>NC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>0</td>
                                  </tr>
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                    <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-III</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21MAT03</td>
                                <td>Discrete Structures</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21AID02</td>
                                <td>Foundations of Artificial Intelligence</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21CSE05</td>
                                <td>Computer Architecture</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21ECE61</td>
                                <td>Analog and Digital Electronics</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21CSE02</td>
                                    <td>Data Structures</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21ACY02</td>
                                    <td>RDBMS & MySQL</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21ENG03</td>
                                    <td>Professional Communication</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21CSEP3</td>
                                    <td>Data structures Lab</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21AIDP2</td>
                                    <td>Artificial Intelligence Lab</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>10</td>
                                    <td>21ACYP2</td>
                                    <td>RDBMS & MySQL Lab</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>11</td>
                                    <td>21NCP03</td>
                                    <td>Environmental Science</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                 <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-IV</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21MAT06</td>
                                <td>Probability and Statistics</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21AID03</td>
                                <td>Foundations of Data Science</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21CSE07</td>
                                <td>Design and Analysis of Algorithms</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21CSE06</td>
                                <td>Operating System</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21CSE11</td>
                                    <td>Computer Networks</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21AID04</td>
                                    <td>Microservices Architecture and implementation</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21ENG04</td>
                                    <td>Advanced Technical Communication</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21CSEP8</td>
                                    <td>Computer Networks lab</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21CSEP6</td>
                                    <td>Operating System lab</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>10</td>
                                    <td>21AIDP3</td>
                                    <td>Microservices Architecture & implementation Lab</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>11</td>
                                    <td>21NCP04</td>
                                    <td>Renewable Energy Source</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-V</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21AID05</td>
                                <td>Data Visualization (R, Python, Watson Studio)</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21AML01</td>
                                <td>Conversational AI</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21CSE20</td>
                                <td>Natural Language Processing</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21AML02</td>
                                <td>Computer Vision</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td></td>
                                    <td>Professional Elective-I</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21UHV02</td>
                                    <td>Universal Human Values 2: Understanding Harmony</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21AIDP4</td>
                                    <td>Data Visualization (R, Python, Watson Studio) Lab</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                
                                  <tr>
                                    <td>8</td>
                                    <td>21ENGP3</td>
                                    <td>Professional Communication Lab</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21NCP05</td>
                                    <td>Essence of Indian Traditional Knowledge</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VI</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21INT02</td>
                                <td>Web Programming</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21AML03</td>
                                <td>Deep Learning and its applications</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td></td>
                                <td>Professional Elective-II</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td></td>
                                <td>Open Elective-I</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21AID07</td>
                                    <td>Predictive Modeling</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21AIDP5</td>
                                    <td>Predictive Modeling Lab</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21AMLP1</td>
                                    <td>Deep Learning and its applications Lab</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21INTP1</td>
                                    <td>Web Programming Lab</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21CYSMP</td>
                                    <td>Mini Project</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VII</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21GEN06</td>
                                <td>Disaster Management</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td></td>
                                <td>Open Elective-II</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td></td>
                                <td>Professional Elective-III</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td></td>
                                <td>Professional Elective-IV</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21AID08</td>
                                    <td>Machine Learning using Watson Studio</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21AIDP6</td>
                                    <td>Machine Learning using Watson Studio Lab</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21AIDIN</td>
                                    <td>Internship & Publication</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  
                                  
                                
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                  
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VIII</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td></td>
                                <td>Professional Elective-V</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21AID09</td>
                                <td>AI Analyst – AP skills</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21AIDP7</td>
                                <td>AI Analyst – AP skills Lab</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21AIDPW</td>
                                <td>Project Work</td>
                                <td>EEC</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
            </div> 
              
             
              
              
            </body>
          </html>
        `);
        newPage.document.close();
    };

});




const cyssylabus = ["cys-sylabus"];

cyssylabus.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");



        newPage.document.write(`
          <html>
            <head>
              <title>cys_sys-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  h2 {
                      text-align: center;
                      margin-bottom: 20px;
                    }
                 header {
                 position:fixed;
                 width:100%;
              background-color:yellow;
              font-weight:bold;
              color:darkblue;
              padding: 20px;
              text-align: center;
              font-size: 2em;
              box-shadow: 0 4px 6px rgba(0,0,0,0.3);
            }
                    table {
                      width: 100%;
                      border-collapse: collapse;
                      box-shadow: 0 0 10px rgba(0,0,0,0.1);
                      background-color: #fff;
                    }
                
                    th, td {
                      padding: 12px;
                      border: 1px solid #ddd;
                      text-align: center;
                    }
                
                    th {
                      background-color: #0077b6;
                      color: white;
                    }
                
                    tr:hover {
                      background-color: #caf0f8;
                      cursor: pointer;
                      transition: background-color 0.3s ease;
                    }
                    tr:active {
                      background-color: #90e0ef;
                    }
                }
              </style>
            </head>
            <body>
            <header>DHANALAKSHMI SRINIVASAN UNIVERSITY</header>
             <div style="height:100%; padding:40px; text-align:left;overflow-y: auto;">
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; margin-top:60px; mb-3">SEMESTER-I</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21ENG01</td>
                                <td>Basics In Communication</td>
                                <td>HS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>1</td>
                                <td>4</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21MAT01</td>
                                <td>Algebra and Calculus</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>23PHY01</td>
                                <td>Engineering Physics</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21GEN01</td>
                                <td>Engineering Graphics & Design</td>
                                <td>ES</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>5</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21ACY01</td>
                                    <td>Python Programming</td>
                                    <td>ES</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21PHYP1</td>
                                    <td>Engineering Physics Laboratory</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21ACYP1</td>
                                    <td>Python Programming Laboratory</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21YOG01</td>
                                    <td>Yoga</td>
                                    <td>MC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>0</td>
                                  </tr>
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-II</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21ENG02</td>
                                <td>Technical Communication</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21MAT02</td>
                                <td>Advanced Calculus and ODE</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21CHY01</td>
                                <td>Engineering Chemistry</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21GEN03</td>
                                <td>Basic Electrical & Electronics Engineering</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21CSE01</td>
                                    <td>Programming in C</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21AID01</td>
                                    <td>Java Programming</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21GEN05</td>
                                    <td>Workshop Practices</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21CHYP1</td>
                                    <td>Engineering Chemistry Laboratory</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21ENGP2</td>
                                    <td>Communication Skills Laboratory</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>10</td>
                                    <td>21AIDP1</td>
                                    <td>Java Programming Lab</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>11</td>
                                    <td>21CSEP1</td>
                                    <td>Programming in C Laboratory</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>12</td>
                                    <td>21NCP02</td>
                                    <td>NSS</td>
                                    <td>NC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>0</td>
                                  </tr>
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                    <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-III</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21MAT03</td>
                                <td>Discrete Structures</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              
                              <tr>
                                <td>2</td>
                                <td>21CSE05</td>
                                <td>Computer Architecture</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21ECE61</td>
                                <td>Analog and Digital Electronics</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>4</td>
                                    <td>21CSE02</td>
                                    <td>Data Structures</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21CSE03</td>
                                    <td>Object Oriented Programming</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21ENG03</td>
                                    <td>Professional Communication</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21CSEP3</td>
                                    <td>Data structures Lab</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21CSEP4</td>
                                    <td>Object Oriented Programming Lab</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21ACYP3</td>
                                    <td>Cloud Application Developer Lab</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>10</td>
                                    <td>21NCP03</td>
                                    <td>Environmental Science</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>11</td>
                                    <td>21ACY03</td>
                                    <td>Cloud Application Developer</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                 <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-IV</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21MAT06</td>
                                <td>Probability and Statistics</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21CSE07</td>
                                <td>Design and Analysis of Algorithms</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21CYS01</td>
                                <td>Foundations of Cyber Security</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21CSE06</td>
                                <td>Operating System</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21CSE11</td>
                                    <td>Computer Networks</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21ACY04</td>
                                    <td>Identity and Access Management</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21ENG04</td>
                                    <td>Advanced Technical Communication</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21ACYP4</td>
                                    <td>Identity and Access Management Lab</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21CSEP6</td>
                                    <td>Operating System lab</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>10</td>
                                    <td>21CYSP1</td>
                                    <td>Cyber Security Lab</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>11</td>
                                    <td>21NCP04</td>
                                    <td>Renewable Energy Source</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-V</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21CYS02</td>
                                <td>Artificial Intelligence and Machine Learning</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21INT02</td>
                                <td>Web Programming</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21UHV02</td>
                                <td>Universal Human Values 2: Understanding Harmony</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21CYS03</td>
                                <td>Cyber Law and Ethics</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td></td>
                                    <td>Professional Elective-I</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21ACY05</td>
                                    <td>Data Security using Guardium</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21ACYP5</td>
                                    <td>Data Security using Guardium Lab</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                
                                  <tr>
                                    <td>8</td>
                                    <td>21INTP1</td>
                                    <td>Web Programming Lab</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21NCP05</td>
                                    <td>Essence of Indian Traditional Knowledge</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VI</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21GEN06</td>
                                <td>Disaster Management</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21CYS04</td>
                                <td>Web Mining</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td></td>
                                <td>Professional Elective-II</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td></td>
                                <td>Open Elective-I</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21ACY06</td>
                                    <td>Security Intelligence Engineer</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21ACYP6</td>
                                    <td>Security Intelligence Engineer Lab</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21ENGP3</td>
                                    <td>Professional Communication Lab</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21CYSP2</td>
                                    <td>Web Mining Lab</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21CYSMP</td>
                                    <td>Mini Project</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VII</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21CYS05</td>
                                <td>Digital Forensics</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td></td>
                                <td>Open Elective-II</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td></td>
                                <td>Professional Elective-III</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td></td>
                                <td>Professional Elective-IV</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21ACY07</td>
                                    <td>Cloud Security</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21ACY07</td>
                                    <td>Cloud Security Lab</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21AIDIN</td>
                                    <td>Internship & Publication</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  
                                  
                                
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                  
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VIII</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td></td>
                                <td>Professional Elective-V</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21AID09</td>
                                <td>AI Analyst – AP skills</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21AIDP7</td>
                                <td>AI Analyst – AP skills Lab</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21AIDPW</td>
                                <td>Project Work</td>
                                <td>EEC</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
            </div> 
              
             
              
              
            </body>
          </html>
        `);
        newPage.document.close();
    };

});


const csesylabus = ["cse-sylabus"];

csesylabus.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");



        newPage.document.write(`
          <html>
            <head>
              <title>cse_sys-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  h2 {
                      text-align: center;
                      margin-bottom: 20px;
                    }
                 header {
                 position:fixed;
                 width:100%;
              background-color:yellow;
              font-weight:bold;
              color:darkblue;
              padding: 20px;
              text-align: center;
              font-size: 2em;
              box-shadow: 0 4px 6px rgba(0,0,0,0.3);
            }
                    table {
                      width: 100%;
                      border-collapse: collapse;
                      box-shadow: 0 0 10px rgba(0,0,0,0.1);
                      background-color: #fff;
                    }
                
                    th, td {
                      padding: 12px;
                      border: 1px solid #ddd;
                      text-align: center;
                    }
                
                    th {
                      background-color: #0077b6;
                      color: white;
                    }
                
                    tr:hover {
                      background-color: #caf0f8;
                      cursor: pointer;
                      transition: background-color 0.3s ease;
                    }
                    tr:active {
                      background-color: #90e0ef;
                    }
                }
              </style>
            </head>
            <body>
            <header>DHANALAKSHMI SRINIVASAN UNIVERSITY</header>
             <div style="height:100%; padding:40px; text-align:left;overflow-y: auto;">
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; margin-top:60px; mb-3">SEMESTER-I</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21ENG01</td>
                                <td>Basics In Communication</td>
                                <td>HS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>1</td>
                                <td>4</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21MAT01</td>
                                <td>Algebra and Calculus</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>23PHY01</td>
                                <td>Engineering Physics</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21GEN01</td>
                                <td>Engineering Graphics & Design</td>
                                <td>ES</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>5</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21ACY01</td>
                                    <td>Python Programming</td>
                                    <td>ES</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21PHYP1</td>
                                    <td>Engineering Physics Laboratory</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21ACYP1</td>
                                    <td>Python Programming Laboratory</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21YOG01</td>
                                    <td>Yoga</td>
                                    <td>MC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>0</td>
                                  </tr>
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-II</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21ENG02</td>
                                <td>Technical Communication</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21MAT02</td>
                                <td>Advanced Calculus and ODE</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21CHY01</td>
                                <td>Engineering Chemistry</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21GEN03</td>
                                <td>Basic Electrical & Electronics Engineering</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21CSE01</td>
                                    <td>Programming in C</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>6</td>
                                    <td>21GEN05</td>
                                    <td>Workshop Practices</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21CHYP1</td>
                                    <td>Engineering Chemistry Laboratory</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21ENGP2</td>
                                    <td>Communication Skills Laboratory</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>9</td>
                                    <td>21CSEP1</td>
                                    <td>Programming in C Laboratory</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>10</td>
                                    <td>21NCP02</td>
                                    <td>NSS</td>
                                    <td>NC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>0</td>
                                  </tr>
                                  <tr>
                                    <td>11</td>
                                    <td>21GEN03</td>
                                    <td>Basic Electrical & Electronics Engineering</td>
                                    <td>NC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>0</td>
                                  </tr>
                                  <tr>
                                    <td>12</td>
                                    <td>21GENP5</td>
                                    <td>Workshop Practices Laboratory</td>
                                    <td>NC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>0</td>
                                  </tr>
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                    <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-III</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21MAT03</td>
                                <td>Discrete Structures</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              
                              <tr>
                                <td>2</td>
                                <td>21ECE62</td>
                                <td>Digital Electronics</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21ECE61</td>
                                <td>Analog and Digital Electronics</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>4</td>
                                    <td>21CSE02</td>
                                    <td>Data Structures</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21CSE03</td>
                                    <td>Object Oriented Programming</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21ENG03</td>
                                    <td>Professional Communication</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21CSEP3</td>
                                    <td>Data structures Lab</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21CSEP4</td>
                                    <td>Object Oriented Programming Lab</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>9</td>
                                    <td>21ECEP12</td>
                                    <td>Digital Electronics Lab</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>10</td>
                                    <td>21NCP03</td>
                                    <td>Environmental Science</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                 <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-IV</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21MAT06</td>
                                <td>Probability and Statistics</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21CSE07</td>
                                <td>Design and Analysis of Algorithms</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21CSE05</td>
                                <td>Computer Architecture</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21CSE06</td>
                                <td>Operating System</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21CSE08</td>
                                    <td>Software Engineering</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21ACY04</td>
                                    <td>Identity and Access Management</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21ENG04</td>
                                    <td>Advanced Technical Communication</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21ACYP4</td>
                                    <td>Identity and Access Management Lab</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21CSEP6</td>
                                    <td>Operating System lab</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>10</td>
                                    <td>21CSEP7</td>
                                    <td>Software Engineering Lab</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>11</td>
                                    <td>21NCP04</td>
                                    <td>Renewable Energy Source</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-V</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21IoT01</td>
                                <td>Fundamental of Database Management Systems</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td></td>
                                <td>Professional Elective-I</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21UHV02</td>
                                <td>Universal Human Values 2: Understanding Harmony</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21CSE11</td>
                                <td>Computer Networks</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td></td>
                                    <td>Open Elective-I</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21INT01</td>
                                    <td>Information Retrieval Systems</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21IoTP1</td>
                                    <td>Database Management Systems Lab</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                
                                  <tr>
                                    <td>8</td>
                                    <td>21ENGP3</td>
                                    <td>Professional Communication Lab</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21NCP05</td>
                                    <td>Essence of Indian Traditional Knowledge</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VI</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21GEN06</td>
                                <td>Disaster Management</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21INT02</td>
                                <td>Web Programming</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td></td>
                                <td>Professional Elective-II</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>23MAT08</td>
                                <td>Optimization Techniques</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21ECE68</td>
                                    <td>Embedded System Design and Architecture</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21INT03</td>
                                    <td>Theory of Computation</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21INTP1</td>
                                    <td>Web Programming Lab</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>8</td>
                                    <td>21CYSMP</td>
                                    <td>Mini Project</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VII</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21CSE13</td>
                                <td>Cloud Computing</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21IoT02</td>
                                <td>Internet of Things</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td></td>
                                <td>Professional Elective-III</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td></td>
                                <td>Professional Elective-IV</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21AML04</td>
                                    <td>Introduction to Machine Learning</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21IoTIN</td>
                                    <td>Internship & Publication</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  
                                  
                                  
                                
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                  
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VIII</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td></td>
                                <td>Open Elective-II</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td></td>
                                <td>Professional Elective-V</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21INTPW</td>
                                <td>Project Work</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
            </div> 
              
             
              
              
            </body>
          </html>
        `);
        newPage.document.close();
    };

});

const iotsylabus = ["iot-sylabus"];

iotsylabus.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");



        newPage.document.write(`
          <html>
            <head>
              <title>iot_sys-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  h2 {
                      text-align: center;
                      margin-bottom: 20px;
                    }
                 header {
                 position:fixed;
                 width:100%;
              background-color:yellow;
              font-weight:bold;
              color:darkblue;
              padding: 20px;
              text-align: center;
              font-size: 2em;
              box-shadow: 0 4px 6px rgba(0,0,0,0.3);
            }
                    table {
                      width: 100%;
                      border-collapse: collapse;
                      box-shadow: 0 0 10px rgba(0,0,0,0.1);
                      background-color: #fff;
                    }
                
                    th, td {
                      padding: 12px;
                      border: 1px solid #ddd;
                      text-align: center;
                    }
                
                    th {
                      background-color: #0077b6;
                      color: white;
                    }
                
                    tr:hover {
                      background-color: #caf0f8;
                      cursor: pointer;
                      transition: background-color 0.3s ease;
                    }
                    tr:active {
                      background-color: #90e0ef;
                    }
                }
              </style>
            </head>
            <body>
            <header>DHANALAKSHMI SRINIVASAN UNIVERSITY</header>
             <div style="height:100%; padding:40px; text-align:left;overflow-y: auto;">
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; margin-top:60px; mb-3">SEMESTER-I</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21ENG01</td>
                                <td>Basics In Communication</td>
                                <td>HS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>1</td>
                                <td>4</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21MAT01</td>
                                <td>Algebra and Calculus</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21CHY01</td>
                                <td>Engineering Chemistry</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21GEN01</td>
                                <td>Engineering Graphics & Design</td>
                                <td>ES</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>5</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21ACY01</td>
                                    <td>Python Programming</td>
                                    <td>ES</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21PHYP1</td>
                                    <td>Engineering Physics Laboratory</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21ACYP1</td>
                                    <td>Python Programming Laboratory</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21YOG01</td>
                                    <td>Yoga</td>
                                    <td>MC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>0</td>
                                  </tr>
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-II</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21ENG02</td>
                                <td>Technical Communication</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21MAT02</td>
                                <td>Advanced Calculus and ODE</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>23PHY01</td>
                                <td>Engineering Physics</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21GEN03</td>
                                <td>Basic Electrical & Electronics Engineering</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21CSE01</td>
                                    <td>Programming in C</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  
                                
                                  <tr>
                                    <td>6</td>
                                    <td>21PHYP1</td>
                                    <td>Engineering Physics Laboratory</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21ENGP2</td>
                                    <td>Communication Skills Laboratory</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>8</td>
                                    <td>21CSEP1</td>
                                    <td>Programming in C Laboratory</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21NCP02</td>
                                    <td>NSS</td>
                                    <td>NC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>0</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>10</td>
                                    <td>21GENP5</td>
                                    <td>Workshop Practices Laboratory</td>
                                    <td>NC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>0</td>
                                  </tr>
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                    <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-III</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21MAT03</td>
                                <td>Discrete Structures</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              
                              <tr>
                                <td>2</td>
                                <td>21IoT01</td>
                                <td>Fundamental of Database Management Systems</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21CSE03</td>
                                <td>Object Oriented Programming</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>4</td>
                                    <td>21CSE02</td>
                                    <td>Data Structures</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21CSE03</td>
                                    <td>Object Oriented Programming</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21ENG03</td>
                                    <td>Professional Communication</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21CSEP3</td>
                                    <td>Data structures Lab</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21CSEP4</td>
                                    <td>Object Oriented Programming Lab</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                 
                                  
                                  <tr>
                                    <td>9</td>
                                    <td>21NCP03</td>
                                    <td>Environmental Science</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>10</td>
                                    <td>21ECE65</td>
                                    <td>Digital Logic and Design</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>11</td>
                                    <td>21IoTP1</td>
                                    <td>Database Management Systems Lab</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                 <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-IV</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21MAT06</td>
                                <td>Probability and Statistics</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21CSE07</td>
                                <td>Design and Analysis of Algorithms</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21IoT02</td>
                                <td>Internet of Things</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21ECE67</td>
                                <td>Sensors & Actuators</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21CSE11</td>
                                    <td>Computer Networks</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21ENG04</td>
                                    <td>Advanced Technical Communication</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21ENG04</td>
                                    <td>Advanced Technical Communication</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>8</td>
                                    <td>21CSEP6</td>
                                    <td>Operating System lab</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21CSEP7</td>
                                    <td>Software Engineering Lab</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>10</td>
                                    <td>21NCP04</td>
                                    <td>Renewable Energy Source</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-V</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td></td>
                                <td>Open Elective-I</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21IoT03</td>
                                <td>IoT Architectures and Protocols</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21UHV02</td>
                                <td>Universal Human Values 2: Understanding Harmony</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21IoT04</td>
                                <td>Big Data in IoT</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21ECE66</td>
                                    <td>Microprocessors And Microcontrollers</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21UHV02</td>
                                    <td>Universal Human Values 2: Understanding Harmony</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td></td>
                                    <td>Professional Elective-I</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                
                                  <tr>
                                    <td>8</td>
                                    <td>21IoTP2</td>
                                    <td>Fundamentals of IoT lab</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21ECEP6</td>
                                    <td>Microprocessors And Microcontrollers Lab</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>10</td>
                                    <td>21NCP05</td>
                                    <td>Essence of Indian TraditionalKnowledge</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VI</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21IoT05</td>
                                <td>Programming for IoT boards</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21IoT06</td>
                                <td>Wearable Computing</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21CSE13</td>
                                <td>Cloud Computing</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21GEN06</td>
                                <td>Disaster Management</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td></td>
                                    <td>Professional Elective-II</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21IoTP3</td>
                                    <td>Cloud Computing Lab</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21ENGP3</td>
                                    <td>Professional Communication Lab</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>8</td>
                                    <td>21CYSMP</td>
                                    <td>Mini Project</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VII</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21IoT07</td>
                                <td>Privacy and Security in IoT</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21CYS10</td>
                                <td>Wireless Adhoc and Sensor Networks</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21IoT08</td>
                                <td>Industrial IoT</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td></td>
                                <td>Open Elective-II</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td></td>
                                    <td>Professional Elective-III</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21IoTP4</td>
                                    <td>Security in IoT Lab</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21IoTIN</td>
                                    <td>Internship & Publication</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  
                                  
                                  
                                
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                  
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VIII</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td></td>
                                <td>Professional Elective-IV</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td></td>
                                <td>Professional Elective-V</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21IoTPW</td>
                                <td>Project Work</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
            </div> 
              
             
              
              
            </body>
          </html>
        `);
        newPage.document.close();
    };

});


const agrisylabus = ["agri-sylabus"];

agrisylabus.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");



        newPage.document.write(`
          <html>
            <head>
              <title>agri_sys-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  h2 {
                      text-align: center;
                      margin-bottom: 20px;
                    }
                 header {
                 position:fixed;
                 width:100%;
              background-color:yellow;
              font-weight:bold;
              color:darkblue;
              padding: 20px;
              text-align: center;
              font-size: 2em;
              box-shadow: 0 4px 6px rgba(0,0,0,0.3);
            }
                    table {
                      width: 100%;
                      border-collapse: collapse;
                      box-shadow: 0 0 10px rgba(0,0,0,0.1);
                      background-color: #fff;
                    }
                
                    th, td {
                      padding: 12px;
                      border: 1px solid #ddd;
                      text-align: center;
                    }
                
                    th {
                      background-color: #0077b6;
                      color: white;
                    }
                
                    tr:hover {
                      background-color: #caf0f8;
                      cursor: pointer;
                      transition: background-color 0.3s ease;
                    }
                    tr:active {
                      background-color: #90e0ef;
                    }
                }
              </style>
            </head>
            <body>
            <header>DHANALAKSHMI SRINIVASAN UNIVERSITY</header>
              <div style="height:100%; padding:40px; text-align:left;overflow-y: auto;">
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; margin-top:60px; mb-3">SEMESTER-I</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21ENG01</td>
                                <td>Basics In Communication</td>
                                <td>HS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>1</td>
                                <td>4</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21MAT01</td>
                                <td>Algebra and Calculus</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21CHY01</td>
                                <td>Engineering Chemistry</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21GEN01</td>
                                <td>Engineering Graphics & Design</td>
                                <td>ES</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>5</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21GEN02 </td>
                                    <td>Programming for ProblemSolving</td>
                                    <td>ES</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21PHYP1</td>
                                    <td>Engineering Physics Laboratory</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21ACYP1</td>
                                    <td>Programming for ProblemSolving Laboratory</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21YOG01</td>
                                    <td>Yoga</td>
                                    <td>MC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>0</td>
                                  </tr>
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-II</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21ENG02</td>
                                <td>Technical Communication</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21MAT02</td>
                                <td>Advanced Calculus and ODE</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>23PHY01</td>
                                <td>Engineering Physics</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21GEN03</td>
                                <td>Basic Electrical & Electronics Engineering</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21MEC01 </td>
                                    <td>Engineering Mechanics </td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  
                                
                                  <tr>
                                    <td>6</td>
                                    <td>21PHYP1</td>
                                    <td>Engineering Physics Laboratory</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21ENGP2</td>
                                    <td>Communication Skills Laboratory</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                
                                  <tr>
                                    <td>8</td>
                                    <td>21NCP02</td>
                                    <td>NSS</td>
                                    <td>NC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>0</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>9</td>
                                    <td>21GENP5</td>
                                    <td>Workshop Practices Laboratory</td>
                                    <td>NC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>0</td>
                                  </tr>
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                    <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-III</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21MAT05 </td>
                                <td>Numerical Solutions </td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              
                              <tr>
                                <td>2</td>
                                <td>21AGR01 </td>
                                <td>Fundamentals of SoilScience</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21AGR02 </td>
                                <td>Surveying & Levelling </td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>4</td>
                                    <td>21AGR03 </td>
                                    <td>Irrigation Systems </td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21AGR04 </td>
                                    <td>Fluid and AppliedHydraulics Engineering</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21AGR05 </td>
                                    <td>Agricultural ProcessEngineering</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21NCP03</td>
                                    <td>Environmental Science </td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21AGRP1</td>
                                    <td>Surveying lab </td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                 
                                  
                                  <tr>
                                    <td>9</td>
                                    <td>21AGRP2 </td>
                                    <td>Hydraulic EngineeringLab</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                 
                                  
                                  
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                 <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-IV</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21AGR06 </td>
                                <td>Strength of Materials </td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21AGR07</td>
                                <td>Drainage Engineering </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21AGR08 </td>
                                <td>Mechanics of soil </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21AGR09</td>
                                <td>Agronomy </td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21AGR10</td>
                                    <td>Ground Water and WellEngineering</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21NCP04 </td>
                                    <td>Renewable EnergySources</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21AGRP3 </td>
                                    <td>Strength of Material Lab </td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>8</td>
                                    <td>21AGRP4 </td>
                                    <td>Agricultural Engineeringpractice lab</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-V</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21AGE11 </td>
                                <td>Soil &Water conservationEngineering</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21AGE12 </td>
                                <td>Post Harvest Engineering </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21AGE13</td>
                                <td>Dairy & Food ProcessEngineering</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21NCP05 </td>
                                <td>Essence of Indian Traditional Knowledge</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td></td>
                                    <td>Professional Elective-1 </td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td></td>
                                    <td>Professional Elective-2 </td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21AGEP5 </td>
                                    <td>Diary and Food Engineering Lab</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                
                                  <tr>
                                    <td>8</td>
                                    <td>21AGEP6 </td>
                                    <td>Soil Mechanics Laboratory </td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21ENGP3 </td>
                                    <td>ProfessionalCommunication Lab</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                 
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VI</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21AGE16 </td>
                                <td>Micro Irrigation system </td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21AGE17</td>
                                <td>Farm machinery and Equipment</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21AGE18</td>
                                <td>Building Materials</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td></td>
                                <td>Professional Elective-3 </td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td></td>
                                    <td>Professional Elective-4</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21AGEP7 </td>
                                    <td>Farm machinery and equipment Lab</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21AGEP8 </td>
                                    <td>Industrial Mini project </td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
          
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VII</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21AGE19 </td>
                                <td>Solid Waste Management </td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21AGE20 </td>
                                <td>Tractor and Power units </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21UHV02</td>
                                <td>Universal Human Values -II</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td></td>
                                <td>Professional Elective-5 </td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td></td>
                                    <td>Open Elective-1 </td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21GEN06 </td>
                                    <td>Disaster Management </td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21AGEP9 </td>
                                    <td>Building Materials and Structural Drawing Lab</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21AGEP10</td>
                                    <td>Industrial Training (4 weeks During VI Semester –Summer)</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  
                                  
                                  
                                
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                  
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VIII</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td></td>
                                <td>Professional Elective-6 </td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td></td>
                                <td>Open Elective-2</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21AGEP11</td>
                                <td>PROJECT WORK</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
            </div> 
              
             
              
              
            </body>
          </html>
        `);
        newPage.document.close();
    };

});

const ecesylabus = ["ece-sylabus"];

ecesylabus.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");



        newPage.document.write(`
          <html>
            <head>
              <title>ece_sys-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  h2 {
                      text-align: center;
                      margin-bottom: 20px;
                    }
                 header {
                 position:fixed;
                 width:100%;
              background-color:yellow;
              font-weight:bold;
              color:darkblue;
              padding: 20px;
              text-align: center;
              font-size: 2em;
              box-shadow: 0 4px 6px rgba(0,0,0,0.3);
            }
                    table {
                      width: 100%;
                      border-collapse: collapse;
                      box-shadow: 0 0 10px rgba(0,0,0,0.1);
                      background-color: #fff;
                    }
                
                    th, td {
                      padding: 12px;
                      border: 1px solid #ddd;
                      text-align: center;
                    }
                
                    th {
                      background-color: #0077b6;
                      color: white;
                    }
                
                    tr:hover {
                      background-color: #caf0f8;
                      cursor: pointer;
                      transition: background-color 0.3s ease;
                    }
                    tr:active {
                      background-color: #90e0ef;
                    }
                }
              </style>
            </head>
            <body>
            <header>DHANALAKSHMI SRINIVASAN UNIVERSITY</header>
              <div style="height:100%; padding:40px; text-align:left;overflow-y: auto;">
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; margin-top:60px; mb-3">SEMESTER-I</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21ENG01</td>
                                <td>Basics In Communication</td>
                                <td>HS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>1</td>
                                <td>4</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21MAT01</td>
                                <td>Algebra and Calculus</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21CHY01</td>
                                <td>Engineering Chemistry</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21GEN01</td>
                                <td>Engineering Graphics & Design</td>
                                <td>ES</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>5</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21GEN02 </td>
                                    <td>Programming for ProblemSolving</td>
                                    <td>ES</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21PHYP1</td>
                                    <td>Engineering Physics Laboratory</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21ACYP1</td>
                                    <td>Programming for ProblemSolving Laboratory</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21YOG01</td>
                                    <td>Yoga</td>
                                    <td>MC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>0</td>
                                  </tr>
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-II</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21ENG02</td>
                                <td>Technical Communication</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21MAT02</td>
                                <td>Advanced Calculus and ODE</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>23PHY01</td>
                                <td>Engineering Physics</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21GEN03</td>
                                <td>Basic Electrical & Electronics Engineering</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21MEC01 </td>
                                    <td>Engineering Mechanics </td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  
                                
                                  <tr>
                                    <td>6</td>
                                    <td>21PHYP1</td>
                                    <td>Engineering Physics Laboratory</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21ENGP2</td>
                                    <td>Communication Skills Laboratory</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                
                                  <tr>
                                    <td>8</td>
                                    <td>21NCP02</td>
                                    <td>NSS</td>
                                    <td>NC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>0</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>9</td>
                                    <td>21GENP5</td>
                                    <td>Workshop Practices Laboratory</td>
                                    <td>NC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>0</td>
                                  </tr>
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                    <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-III</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21ENG03  </td>
                                <td>Professional Communication </td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              
                              <tr>
                                <td>2</td>
                                <td>21MAT05 </td>
                                <td>Mathematics III </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21EEE02 </td>
                                <td>Electrical Machinery</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>4</td>
                                    <td>21EEE03</td>
                                    <td>Engineering Electromagnetics </td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21EEE04  </td>
                                    <td>Semiconductor Devices & Circuits </td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21EEE05  </td>
                                    <td>Transmission & Distribution </td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21NCP03</td>
                                    <td>Environmental Science </td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21EEEP1 </td>
                                    <td>Electrical Machinery I Lab </td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                 
                                  
                                  <tr>
                                    <td>9</td>
                                    <td>21EEEP2</td>
                                    <td>Circuits & Devices Lab </td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                 
                                  
                                  
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                 <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-IV</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21ENG04  </td>
                                <td>Advanced Technical Communucation </td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21EEE06 </td>
                                <td>Electrical Machinery II</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21EEE07  </td>
                                <td>Measurements & Instrumentation </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21EEE08 </td>
                                <td>Control Systems </td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21EEE09 </td>
                                    <td>Analog & Digital Circuits </td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21NCP04 </td>
                                    <td>Renewable EnergySources</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21EEEP3  </td>
                                    <td>Electrical Machinery II Lab </td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>8</td>
                                    <td>21EEEP5</td>
                                    <td>Analog & Digital Circuits Lab </td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
       
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-V</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21EEE10</td>
                                <td>Power electronics </td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21EEE11  </td>
                                <td>Power System Analysis </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21EEE12</td>
                                <td>Protection and Switchgear </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21EEE13</td>
                                <td>Microprocessor and Microcontroller</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21CSE03 </td>
                                    <td>Object Oriented Programming </td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td></td>
                                    <td>Professional Elective I </td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21NCP05</td>
                                    <td>Essence of Indian Traditional Knowledge</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                
                                  <tr>
                                    <td>8</td>
                                    <td>21EEEP6  </td>
                                    <td>Microprocessor and Microcontroller Lab </td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21CSEP4  </td>
                                    <td>Object Oriented Programming Lab </td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>10</td>
                                    <td>21ENGP3</td>
                                    <td>Professional Communication Lab </td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                 
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VI</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21EEE14</td>
                                <td>Solid State Drives </td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21UHV02</td>
                                <td>Professional Ethics and Human Values (UHV-II) </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td></td>
                                <td>Professional Elective - II </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td></td>
                                <td>Professional Elective - III</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td></td>
                                    <td>Open Elective - I </td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td> </td>
                                    <td>Open Elective - II</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21EEEP7</td>
                                    <td>Power Electronics & Drives Lab</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                   <tr>
                                    <td>8</td>
                                    <td>21EEEIN </td>
                                    <td>Internship / In-plant Training </td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21EEEMP</td>
                                    <td>Mini Project </td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
          
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VII</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21GEN06</td>
                                <td>Disaster Management </td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21EEE15  </td>
                                <td>Power System Operation and Control </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td></td>
                                <td>Professional Elective – IV I</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td></td>
                                <td>Professional Elective-IV </td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td></td>
                                    <td>Open Elective-III </td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21EEEP8</td>
                                    <td>Power System Simulation Lab </td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21EEETS  </td>
                                    <td>Technical Seminar/ Publication </td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
              
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                  
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VIII</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td></td>
                                <td>Open Elective -IV  </td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td></td>
                                <td>Professional Elective - VI </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21EEEPW </td>
                                <td>PROJECT WORK</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
            </div> 
              
             
              
              
            </body>
          </html>
        `);
        newPage.document.close();
    };

});

const eeesylabus = ["eee-sylabus"];

eeesylabus.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");



        newPage.document.write(`
          <html>
            <head>
              <title>eee_sys-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  h2 {
                      text-align: center;
                      margin-bottom: 20px;
                    }
                 header {
                 position:fixed;
                 width:100%;
              background-color:yellow;
              font-weight:bold;
              color:darkblue;
              padding: 20px;
              text-align: center;
              font-size: 2em;
              box-shadow: 0 4px 6px rgba(0,0,0,0.3);
            }
                    table {
                      width: 100%;
                      border-collapse: collapse;
                      box-shadow: 0 0 10px rgba(0,0,0,0.1);
                      background-color: #fff;
                    }
                
                    th, td {
                      padding: 12px;
                      border: 1px solid #ddd;
                      text-align: center;
                    }
                
                    th {
                      background-color: #0077b6;
                      color: white;
                    }
                
                    tr:hover {
                      background-color: #caf0f8;
                      cursor: pointer;
                      transition: background-color 0.3s ease;
                    }
                    tr:active {
                      background-color: #90e0ef;
                    }
                }
              </style>
            </head>
            <body>
            <header>DHANALAKSHMI SRINIVASAN UNIVERSITY</header>
              <div style="height:100%; padding:40px; text-align:left;overflow-y: auto;">
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; margin-top:60px; mb-3">SEMESTER-I</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21ENG01</td>
                                <td>Basics In Communication</td>
                                <td>HS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>1</td>
                                <td>4</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21MAT01</td>
                                <td>Algebra and Calculus</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21CHY01</td>
                                <td>Engineering Chemistry</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21GEN01</td>
                                <td>Engineering Graphics & Design</td>
                                <td>ES</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>5</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21GEN02 </td>
                                    <td>Programming for ProblemSolving</td>
                                    <td>ES</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21PHYP1</td>
                                    <td>Engineering Physics Laboratory</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21ACYP1</td>
                                    <td>Programming for ProblemSolving Laboratory</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21YOG01</td>
                                    <td>Yoga</td>
                                    <td>MC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>0</td>
                                  </tr>
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-II</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21ENG02</td>
                                <td>Technical Communication</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21MAT02</td>
                                <td>Advanced Calculus and ODE</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>23PHY01</td>
                                <td>Engineering Physics</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21GEN03</td>
                                <td>Basic Electrical & Electronics Engineering</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21MEC01 </td>
                                    <td>Engineering Mechanics </td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  
                                
                                  <tr>
                                    <td>6</td>
                                    <td>21PHYP1</td>
                                    <td>Engineering Physics Laboratory</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21ENGP2</td>
                                    <td>Communication Skills Laboratory</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                
                                  <tr>
                                    <td>8</td>
                                    <td>21NCP02</td>
                                    <td>NSS</td>
                                    <td>NC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>0</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>9</td>
                                    <td>21GENP5</td>
                                    <td>Workshop Practices Laboratory</td>
                                    <td>NC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>0</td>
                                  </tr>
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                    <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-III</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21ENG03  </td>
                                <td>Professional Communication </td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              
                              <tr>
                                <td>2</td>
                                <td>21MAT05 </td>
                                <td>Mathematics III </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21EEE02 </td>
                                <td>Electrical Machinery</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>4</td>
                                    <td>21EEE03</td>
                                    <td>Engineering Electromagnetics </td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21EEE04  </td>
                                    <td>Semiconductor Devices & Circuits </td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21EEE05  </td>
                                    <td>Transmission & Distribution </td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21NCP03</td>
                                    <td>Environmental Science </td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21EEEP1 </td>
                                    <td>Electrical Machinery I Lab </td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                 
                                  
                                  <tr>
                                    <td>9</td>
                                    <td>21EEEP2</td>
                                    <td>Circuits & Devices Lab </td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                 
                                  
                                  
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                 <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-IV</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21ENG04  </td>
                                <td>Advanced Technical Communucation </td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21EEE06 </td>
                                <td>Electrical Machinery II</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21EEE07  </td>
                                <td>Measurements & Instrumentation </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21EEE08 </td>
                                <td>Control Systems </td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21EEE09 </td>
                                    <td>Analog & Digital Circuits </td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21NCP04 </td>
                                    <td>Renewable EnergySources</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21EEEP3  </td>
                                    <td>Electrical Machinery II Lab </td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>8</td>
                                    <td>21EEEP5</td>
                                    <td>Analog & Digital Circuits Lab </td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
       
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-V</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21EEE10</td>
                                <td>Power electronics </td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21EEE11  </td>
                                <td>Power System Analysis </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21EEE12</td>
                                <td>Protection and Switchgear </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21EEE13</td>
                                <td>Microprocessor and Microcontroller</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21CSE03 </td>
                                    <td>Object Oriented Programming </td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td></td>
                                    <td>Professional Elective I </td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21NCP05</td>
                                    <td>Essence of Indian Traditional Knowledge</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                
                                  <tr>
                                    <td>8</td>
                                    <td>21EEEP6  </td>
                                    <td>Microprocessor and Microcontroller Lab </td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21CSEP4  </td>
                                    <td>Object Oriented Programming Lab </td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>10</td>
                                    <td>21ENGP3</td>
                                    <td>Professional Communication Lab </td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                 
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VI</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21EEE14</td>
                                <td>Solid State Drives </td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21UHV02</td>
                                <td>Professional Ethics and Human Values (UHV-II) </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td></td>
                                <td>Professional Elective - II </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td></td>
                                <td>Professional Elective - III</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td></td>
                                    <td>Open Elective - I </td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td> </td>
                                    <td>Open Elective - II</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21EEEP7</td>
                                    <td>Power Electronics & Drives Lab</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                   <tr>
                                    <td>8</td>
                                    <td>21EEEIN </td>
                                    <td>Internship / In-plant Training </td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21EEEMP</td>
                                    <td>Mini Project </td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
          
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VII</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21GEN06</td>
                                <td>Disaster Management </td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21EEE15  </td>
                                <td>Power System Operation and Control </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td></td>
                                <td>Professional Elective – IV I</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td></td>
                                <td>Professional Elective-IV </td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td></td>
                                    <td>Open Elective-III </td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21EEEP8</td>
                                    <td>Power System Simulation Lab </td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21EEETS  </td>
                                    <td>Technical Seminar/ Publication </td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
              
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                  
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VIII</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td></td>
                                <td>Open Elective -IV  </td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td></td>
                                <td>Professional Elective - VI </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21EEEPW </td>
                                <td>PROJECT WORK</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
            </div> 
              
             
              
              
            </body>
          </html>
        `);
        newPage.document.close();
    };

});
const mechsylabus = ["mech-sylabus"];

mechsylabus.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");



        newPage.document.write(`
          <html>
            <head>
              <title>mech_sys-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  h2 {
                      text-align: center;
                      margin-bottom: 20px;
                    }
                 header {
                 position:fixed;
                 width:100%;
              background-color:yellow;
              font-weight:bold;
              color:darkblue;
              padding: 20px;
              text-align: center;
              font-size: 2em;
              box-shadow: 0 4px 6px rgba(0,0,0,0.3);
            }
                    table {
                      width: 100%;
                      border-collapse: collapse;
                      box-shadow: 0 0 10px rgba(0,0,0,0.1);
                      background-color: #fff;
                    }
                
                    th, td {
                      padding: 12px;
                      border: 1px solid #ddd;
                      text-align: center;
                    }
                
                    th {
                      background-color: #0077b6;
                      color: white;
                    }
                
                    tr:hover {
                      background-color: #caf0f8;
                      cursor: pointer;
                      transition: background-color 0.3s ease;
                    }
                    tr:active {
                      background-color: #90e0ef;
                    }
                }
              </style>
            </head>
            <body>
            <header>DHANALAKSHMI SRINIVASAN UNIVERSITY</header>
              <div style="height:100%; padding:40px; text-align:left;overflow-y: auto;">
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; margin-top:60px; mb-3">SEMESTER-I</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21ENG01</td>
                                <td>Basics In Communication</td>
                                <td>HS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>1</td>
                                <td>4</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21MAT01</td>
                                <td>Algebra and Calculus</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21CHY01</td>
                                <td>Engineering Chemistry</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21GEN01</td>
                                <td>Engineering Graphics & Design</td>
                                <td>ES</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>5</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21GEN02 </td>
                                    <td>Programming for ProblemSolving</td>
                                    <td>ES</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21PHYP1</td>
                                    <td>Engineering Physics Laboratory</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21ACYP1</td>
                                    <td>Programming for ProblemSolving Laboratory</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21YOG01</td>
                                    <td>Yoga</td>
                                    <td>MC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>0</td>
                                  </tr>
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-II</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21ENG02</td>
                                <td>Technical Communication</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21MAT02</td>
                                <td>Advanced Calculus and ODE</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>23PHY01</td>
                                <td>Engineering Physics</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21GEN03</td>
                                <td>Basic Electrical & Electronics Engineering</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21MEC01 </td>
                                    <td>Engineering Mechanics </td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  
                                
                                  <tr>
                                    <td>6</td>
                                    <td>21PHYP1</td>
                                    <td>Engineering Physics Laboratory</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21ENGP2</td>
                                    <td>Communication Skills Laboratory</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                
                                  <tr>
                                    <td>8</td>
                                    <td>21NCP02</td>
                                    <td>NSS</td>
                                    <td>NC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>0</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>9</td>
                                    <td>21GENP5</td>
                                    <td>Workshop Practices Laboratory</td>
                                    <td>NC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>0</td>
                                  </tr>
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                    <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-III</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21MAT03</td>
                                <td>Numerical Methods </td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              
                              <tr>
                                <td>2</td>
                                <td>21MEC02 </td>
                                <td>Applied Thermodynamics </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21MEC03  </td>
                                <td>Fluid Mechanics & Machineries </td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>4</td>
                                    <td>21EEC04 </td>
                                    <td>Electrical Drives and Control  </td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21MEC05   </td>
                                    <td>Manufacturing Technology </td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21MEC06 </td>
                                    <td>Engineering Metallurgy </td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21MECP1 </td>
                                    <td>Manufacturing Technology Lab </td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21MECP2  </td>
                                    <td>Fluid Mechanics and machinery Lab </td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
        
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                 <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-IV</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21MEC09</td>
                                <td>Theory of Machines </td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21MEC10</td>
                                <td>Strength of Materials </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td></td>
                                <td>Open Elective – I </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21MEC11  </td>
                                <td>Design of Machine Elements </td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21MEC12  </td>
                                    <td>Thermal Engineering </td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21HSC02 </td>
                                    <td>Universal Human Values II </td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21MECP3  </td>
                                    <td>Thermal Engineering Lab </td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>8</td>
                                    <td>21MECP4</td>
                                    <td>Theory of Machines Lab </td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
       
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-V</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21MEC16 </td>
                                <td>Design of Transmission Elements </td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21MEC17 </td>
                                <td>Metrology & Measurements </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21MEC18 </td>
                                <td>CAD/CAM  </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21MEC19 </td>
                                <td>Energy conversion systems </td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21MEC20 </td>
                                    <td>Open Elective – II </td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td></td>
                                    <td>Professional Elective – I </td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21MECP5 </td>
                                    <td>Metrology & Measurements Lab </td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                
                                  <tr>
                                    <td>8</td>
                                    <td>21MECP6   </td>
                                    <td>CAD/CAM Lab </td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21GENP7  </td>
                                    <td>Business English/Career development Program </td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                 
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VI</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21MEC22 </td>
                                <td>Finite Element Analysis </td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21MEC23 </td>
                                <td>Heat and Mass Transfer </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td></td>
                                <td>Professional Elective – II </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td></td>
                                <td>Professional Elective - III</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td></td>
                                    <td>Open Elective - III </td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21MEC24  </td>
                                    <td>Management Science and Productivity </td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21MEC25 </td>
                                    <td>Mini Project </td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                   <tr>
                                    <td>8</td>
                                    <td>21GENP9  </td>
                                    <td>Heat Transfer and R & AC Lab </td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VII</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21MEC26 </td>
                                <td>Power Plant Engineering </td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21MEC27 </td>
                                <td>Automobile Technology </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td></td>
                                <td>Professional Elective – IV I</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td></td>
                                <td>Professional Elective-IV </td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td></td>
                                    <td>Open Elective-IV</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21GEN09 </td>
                                    <td>Comprehensive Viva Voce </td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                  
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VIII</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21MEC30 </td>
                                <td>Project Management </td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td></td>
                                <td>Professional Elective - VI  </td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21MEC31  </td>
                                <td>PROJECT WORK</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
            </div> 
              
             
              
              
            </body>
          </html>
        `);
        newPage.document.close();
    };

});


const itsylabus = ["it-sylabus"];

itsylabus.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");



        newPage.document.write(`
          <html>
            <head>
              <title>it_sys-page</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  h2 {
                      text-align: center;
                      margin-bottom: 20px;
                    }
                 header {
                 position:fixed;
                 width:100%;
              background-color:yellow;
              font-weight:bold;
              color:darkblue;
              padding: 20px;
              text-align: center;
              font-size: 2em;
              box-shadow: 0 4px 6px rgba(0,0,0,0.3);
            }
                    table {
                      width: 100%;
                      border-collapse: collapse;
                      box-shadow: 0 0 10px rgba(0,0,0,0.1);
                      background-color: #fff;
                    }
                
                    th, td {
                      padding: 12px;
                      border: 1px solid #ddd;
                      text-align: center;
                    }
                
                    th {
                      background-color: #0077b6;
                      color: white;
                    }
                
                    tr:hover {
                      background-color: #caf0f8;
                      cursor: pointer;
                      transition: background-color 0.3s ease;
                    }
                    tr:active {
                      background-color: #90e0ef;
                    }
                }
              </style>
            </head>
            <body>
            <header>DHANALAKSHMI SRINIVASAN UNIVERSITY</header>
                            <div style="height:100%; padding:40px; text-align:left;overflow-y: auto;">
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; margin-top:60px; mb-3">SEMESTER-I</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21ENG01</td>
                                <td>Basics In Communication</td>
                                <td>HS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>1</td>
                                <td>4</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21MAT01</td>
                                <td>Algebra and Calculus</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>23PHY01</td>
                                <td>Engineering Physics</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21GEN01</td>
                                <td>Engineering Graphics & Design</td>
                                <td>ES</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>5</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21ACY01</td>
                                    <td>Python Programming</td>
                                    <td>ES</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21PHYP1</td>
                                    <td>Engineering Physics Laboratory</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21ACYP1</td>
                                    <td>Python Programming Laboratory</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21YOG01</td>
                                    <td>Yoga</td>
                                    <td>MC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>0</td>
                                  </tr>
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-II</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21ENG02</td>
                                <td>Technical Communication</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21MAT02</td>
                                <td>Advanced Calculus and ODE</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21CHY01</td>
                                <td>Engineering Chemistry</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21GEN03</td>
                                <td>Basic Electrical & Electronics Engineering</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21CSE01</td>
                                    <td>Programming in C</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>6</td>
                                    <td>21GEN05</td>
                                    <td>Workshop Practices</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21CHYP1</td>
                                    <td>Engineering Chemistry Laboratory</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21ENGP2</td>
                                    <td>Communication Skills Laboratory</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>9</td>
                                    <td>21CSEP1</td>
                                    <td>Programming in C Laboratory</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>10</td>
                                    <td>21NCP02</td>
                                    <td>NSS</td>
                                    <td>NC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>0</td>
                                  </tr>
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                    <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-III</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21MAT03</td>
                                <td>Discrete Structures</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              
                              <tr>
                                <td>2</td>
                                <td>21ECE62</td>
                                <td>Digital Electronics</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21ECE61</td>
                                <td>Analog and Digital Electronics</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>4</td>
                                    <td>21CSE02</td>
                                    <td>Data Structures</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21CSE03</td>
                                    <td>Object Oriented Programming</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21ENG03</td>
                                    <td>Professional Communication</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21CSEP3</td>
                                    <td>Data structures Lab</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21CSEP4</td>
                                    <td>Object Oriented Programming Lab</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>9</td>
                                    <td>21ECEP12</td>
                                    <td>Digital Electronics Lab</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>10</td>
                                    <td>21NCP03</td>
                                    <td>Environmental Science</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                 <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-IV</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21MAT06</td>
                                <td>Probability and Statistics</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21CSE07</td>
                                <td>Design and Analysis of Algorithms</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21CSE05</td>
                                <td>Computer Architecture</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21CSE06</td>
                                <td>Operating System</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21CSE08</td>
                                    <td>Software Engineering</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21ACY04</td>
                                    <td>Identity and Access Management</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21ENG04</td>
                                    <td>Advanced Technical Communication</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>8</td>
                                    <td>21ACYP4</td>
                                    <td>Identity and Access Management Lab</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21CSEP6</td>
                                    <td>Operating System lab</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>10</td>
                                    <td>21CSEP7</td>
                                    <td>Software Engineering Lab</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>11</td>
                                    <td>21NCP04</td>
                                    <td>Renewable Energy Source</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-V</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21IoT01</td>
                                <td>Fundamental of Database Management Systems</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td></td>
                                <td>Professional Elective-I</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21UHV02</td>
                                <td>Universal Human Values 2: Understanding Harmony</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>21CSE11</td>
                                <td>Computer Networks</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td></td>
                                    <td>Open Elective-I</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21INT01</td>
                                    <td>Information Retrieval Systems</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21IoTP1</td>
                                    <td>Database Management Systems Lab</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                
                                  <tr>
                                    <td>8</td>
                                    <td>21ENGP3</td>
                                    <td>Professional Communication Lab</td>
                                    <td>HS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  <tr>
                                    <td>9</td>
                                    <td>21NCP05</td>
                                    <td>Essence of Indian Traditional Knowledge</td>
                                    <td>PC</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VI</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21GEN06</td>
                                <td>Disaster Management</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21INT02</td>
                                <td>Web Programming</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td></td>
                                <td>Professional Elective-II</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>23MAT08</td>
                                <td>Optimization Techniques</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21ECE68</td>
                                    <td>Embedded System Design and Architecture</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21INT03</td>
                                    <td>Theory of Computation</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>7</td>
                                    <td>21INTP1</td>
                                    <td>Web Programming Lab</td>
                                    <td>ES</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>4</td>
                                    <td>4</td>
                                    <td>2</td>
                                  </tr>
                                  
                                  <tr>
                                    <td>8</td>
                                    <td>21CYSMP</td>
                                    <td>Mini Project</td>
                                    <td>BS</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>1</td>
                                  </tr>
                                  
                                  
                                  
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VII</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>21CSE10</td>
                                <td>Cryptography & Network Security</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>21IoT02</td>
                                <td>Internet of Things</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td></td>
                                <td>Professional Elective-III</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td></td>
                                <td>Professional Elective-IV</td>
                                <td>ES</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                                </tr>
                                  <tr>
                                    <td>5</td>
                                    <td>21AML04</td>
                                    <td>Introduction to Machine Learning</td>
                                    <td>PC</td>
                                    <td>3</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>3</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>6</td>
                                    <td>21IoTIN</td>
                                    <td>Internship & Publication</td>
                                    <td>PC</td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>2</td>
                                    <td>2</td>
                                  </tr>
                                  
                                  
                                  
                                
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
                  
                
                <h1 style="color:darkgreen;font-size:35px; font-weight:bold; mb-3">SEMESTER-VIII</h1>
                <div>
                    <table>
                            <thead>
                              <tr>
                                <th>S. No</th>
                                <th>Subject Code</th>
                                <th>Subject Name</th>
                                <th>Category</th>
                                <th>L</th>
                                <th>T</th>
                                <th>P</th>
                                <th>Contact Hours</th>
                                <th>Credits</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td></td>
                                <td>Open Elective-II</td>
                                <td>HS</td>
                                <td>2</td>
                                <td>0</td>
                                <td>0</td>
                                <td>2</td>
                                <td>2</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td></td>
                                <td>Professional Elective-V</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>1</td>
                                <td>0</td>
                                <td>4</td>
                                <td>4</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>21INTPW</td>
                                <td>Project Work</td>
                                <td>BS</td>
                                <td>3</td>
                                <td>0</td>
                                <td>0</td>
                                <td>3</td>
                                <td>3</td>
                              </tr>
                              
                                </tbody>
                              </table>
                            
                                            
                </div>
                
                
            </div> 
              
             
              
              
            </body>
          </html>
        `);
        newPage.document.close();
    };

});


const aidsevent = ["aids-event"];

aidsevent.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        newPage.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>AIDS-EVENT</title>
          <style>
            body {
              margin:0;
              font-family: 'Segoe UI', sans-serif;
              background-color: #f4f4f4;
            }

            header {
            width:100%;
              position:fixed;
              background-color:yellow;
              font-weight:bold;
              color:darkblue;
              padding: 20px;
              text-align: center;
              font-size: 2em;
              box-shadow: 0 4px 6px rgba(0,0,0,0.3);
            }


          h2 {
              text-align: center;
              color: #333;
              margin-bottom: 20px;
            }

            .card-container {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              gap: 20px;
            }

            .event-card {
              background: white;
              width: 100%;
              max-width: 300px;
              border-radius: 10px;
              box-shadow: 0 4px 12px rgba(0,0,0,0.1);
              overflow: hidden;
              transition: transform 0.3s ease;
              margin-top:30px;
            }

            .event-card:hover {
              transform: translateY(-5px);
              box-shadow: 0 8px 20px rgba(0,0,0,0.2);
            }

            .event-card img {
              width: 100%;
              height:25vh;
                background-size:cover;
            }

            .event-details {
              padding: 15px;
            }

            .event-details h3 {
              margin: 0 0 10px;
              font-size: 18px;
              color: #444;
            }

            .event-details p {
              margin: 0;
              font-size: 14px;
              color: #666;
            }

            @media (max-width: 600px) {
              .card-container {
                flex-direction: column;
                align-items: center;
              }
            }
           
          </style>
        </head>
        <body>
          <header>DHANALAKSHMI SRINIVASAN UNIVERSITY</header>
             <div class="card-container" >
            <div class="event-card">
              <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757061187/WhatsApp_Image_2025-09-05_at_14.01.21_d5owjw.jpg" alt="Art Expo">
              <div class="event-details">
                <h3>INNOVEXIA'25</h3>
                <p>The Department of Artificial Intelligence and Data Science (AI&DS), in collaboration with MCA, AIML, and CYS, proudly hosted INNOVEXIA'25, a vibrant national-level symposium held on February 1st at the Main Lecture Hall, Academic Block,This dynamic event brought together brilliant minds from across the country to celebrate innovation, creativity, and collaboration across both technical and non-technical domains.</p>
              </div>
            </div>
            <div class="event-card">
              <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757061948/WhatsApp_Image_2025-09-05_at_14.15.14_pzxpod.jpg" alt="Tech Summit">
              <div class="event-details">
                <h3>Workshop Spotlight</h3>
                <p>On August 25, 2025, the Department of AI&DS, under the School of Engineering and Technology, hosted a transformative workshop titled "Emerging Trends in Digital Marketing and Artificial Intelligence." This event brought together students, faculty, and industry experts to explore the evolving landscape of technology-driven marketing and intelligent systems.</p>
              </div>
            </div>
            <div class="event-card">
              <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757062479/WhatsApp_Image_2025-09-05_at_14.22.27_mswbnu.jpg" alt="Music Fest">
              <div class="event-details">
                <h3>Data Analytical Competition</h3>
                <p>On August 29th, the Department of Artificial Intelligence and Data Science (AI&DS), School of Engineering and Technology, hosted an exciting and intellectually charged event titled "Beyond Data Analytical Competition." This initiative aimed to empower students with hands-on experience in data analytics and visualization, fostering both technical skill and creative insight.</p>
              </div>
            </div>
            <div class="event-card">
              <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757062487/WhatsApp_Image_2025-09-05_at_14.23.26_wk5uu1.jpg" alt="Music Fest">
              <div class="event-details">
                <h3>Web Craft</h3>
                <p>The Department of AI&DS proudly hosted Web Craft, a hands-on event designed to empower students with the skills and creativity needed to build modern, responsive websites. Held under the banner of the School of Engineering and Technology, this initiative focused on practical learning, innovation, and digital craftsmanship.</p>
              </div>
            </div>
          </div>
          

         
        </body>
        </html>
      `);
        newPage.document.close();
    };
});


const aimlevent = ["aiml-event", "cys-event"];

aimlevent.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        newPage.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>ML & CYS</title>
          <style>
            body {
              margin:0;
              font-family: 'Segoe UI', sans-serif;
              background-color: #f4f4f4;
            }

            header {
            width:100%;
              position:fixed;
              background-color:yellow;
              font-weight:bold;
              color:darkblue;
              padding: 20px;
              text-align: center;
              font-size: 2em;
              box-shadow: 0 4px 6px rgba(0,0,0,0.3);
            }


          h2 {
              text-align: center;
              color: #333;
              margin-bottom: 20px;
            }

            .card-container {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              gap: 20px;
            }

            .event-card {
              background: white;
              width: 100%;
              max-width: 300px;
              border-radius: 10px;
              box-shadow: 0 4px 12px rgba(0,0,0,0.1);
              overflow: hidden;
              transition: transform 0.3s ease;
              margin-top:30px;
            }

            .event-card:hover {
              transform: translateY(-5px);
              box-shadow: 0 8px 20px rgba(0,0,0,0.2);
            }

            .event-card img {
              width: 100%;
              height:25vh;
                background-size:cover;
            }

            .event-details {
              padding: 15px;
            }

            .event-details h3 {
              margin: 0 0 10px;
              font-size: 18px;
              color: #444;
            }

            .event-details p {
              margin: 0;
              font-size: 14px;
              color: #666;
            }

            @media (max-width: 600px) {
              .card-container {
                flex-direction: column;
                align-items: center;
              }
            }
           
          </style>
        </head>
        <body>
          <header>DHANALAKSHMI SRINIVASAN UNIVERSITY</header>
             <div class="card-container" >
            <div class="event-card">
              <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757061187/WhatsApp_Image_2025-09-05_at_14.01.21_d5owjw.jpg" alt="Art Expo">
              <div class="event-details">
                <h3>INNOVEXIA'25</h3>
                <p>The Department of Artificial Intelligence and Data Science (AI&DS), in collaboration with MCA, AIML, and CYS, proudly hosted INNOVEXIA'25, a vibrant national-level symposium held on February 1st at the Main Lecture Hall, Academic Block,This dynamic event brought together brilliant minds from across the country to celebrate innovation, creativity, and collaboration across both technical and non-technical domains.</p>
              </div>
            </div>
            
            <div class="event-card">
              <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757062487/WhatsApp_Image_2025-09-05_at_14.23.26_wk5uu1.jpg" alt="Music Fest">
              <div class="event-details">
                <h3>Web Craft</h3>
                <p>The Department of AI&DS proudly hosted Web Craft, a hands-on event designed to empower students with the skills and creativity needed to build modern, responsive websites. Held under the banner of the School of Engineering and Technology, this initiative focused on practical learning, innovation, and digital craftsmanship.</p>
              </div>
            </div>
          </div>
          

         
        </body>
        </html>
      `);
        newPage.document.close();
    };
});


const itevent = ["it-event"];

itevent.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        newPage.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>IT-EVENT</title>
          <style>
            body {
              margin:0;
              font-family: 'Segoe UI', sans-serif;
              background-color: #f4f4f4;
            }

            header {
            width:100%;
              position:fixed;
              background-color:yellow;
              font-weight:bold;
              color:darkblue;
              padding: 20px;
              text-align: center;
              font-size: 2em;
              box-shadow: 0 4px 6px rgba(0,0,0,0.3);
            }


          h2 {
              text-align: center;
              color: #333;
              margin-bottom: 20px;
            }

            .card-container {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              gap: 20px;
            }

            .event-card {
              background: white;
              width: 100%;
              max-width: 300px;
              border-radius: 10px;
              box-shadow: 0 4px 12px rgba(0,0,0,0.1);
              overflow: hidden;
              transition: transform 0.3s ease;
              margin-top:30px;
            }

            .event-card:hover {
              transform: translateY(-5px);
              box-shadow: 0 8px 20px rgba(0,0,0,0.2);
            }

            .event-card img {
              width: 100%;
              height:25vh;
                background-size:cover;
            }

            .event-details {
              padding: 15px;
            }

            .event-details h3 {
              margin: 0 0 10px;
              font-size: 18px;
              color: #444;
            }

            .event-details p {
              margin: 0;
              font-size: 14px;
              color: #666;
            }

            @media (max-width: 600px) {
              .card-container {
                flex-direction: column;
                align-items: center;
              }
            }
           
          </style>
        </head>
        <body>
          <header>DHANALAKSHMI SRINIVASAN UNIVERSITY</header>
             <div class="card-container" >
            <div class="event-card">
              <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757072132/WhatsApp_Image_2025-09-05_at_14.01.22_jybhe1.jpg" alt="Art Expo">
              <div class="event-details">
                <h3>Startup Pitch</h3>
                <p>The Department of Information Technology proudly hosted a high-energy Startup Pitch Event aimed at fostering entrepreneurial spirit and technological innovation among students.</p>
              </div>
            </div>
            
            <div class="event-card">
              <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757072138/WhatsApp_Image_2025-09-05_at_14.01.21_1_mogofd.jpg" alt="Music Fest">
              <div class="event-details">
                <h3>Poster Making</h3>
                <p>The Department of Information Technology recently hosted an inspiring Poster Making Event, celebrating the fusion of creativity and innovation among students.</p>
              </div>
            </div>
          </div>
          

         
        </body>
        </html>
      `);
        newPage.document.close();
    };
});


const cseevent = ["cse-event", "iot-event"];

cseevent.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        newPage.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>CSE-IOT</title>
          <style>
            body {
              margin:0;
              font-family: 'Segoe UI', sans-serif;
              background-color: #f4f4f4;
            }

            header {
            width:100%;
              position:fixed;
              background-color:yellow;
              font-weight:bold;
              color:darkblue;
              padding: 20px;
              text-align: center;
              font-size: 2em;
              box-shadow: 0 4px 6px rgba(0,0,0,0.3);
            }


          h2 {
              text-align: center;
              color: #333;
              margin-bottom: 20px;
            }

            .card-container {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              gap: 20px;
            }

            .event-card {
              background: white;
              width: 100%;
              max-width: 300px;
              border-radius: 10px;
              box-shadow: 0 4px 12px rgba(0,0,0,0.1);
              overflow: hidden;
              transition: transform 0.3s ease;
              margin-top:30px;
            }

            .event-card:hover {
              transform: translateY(-5px);
              box-shadow: 0 8px 20px rgba(0,0,0,0.2);
            }

            .event-card img {
              width: 100%;
              height:25vh;
                background-size:cover;
            }

            .event-details {
              padding: 15px;
            }

            .event-details h3 {
              margin: 0 0 10px;
              font-size: 18px;
              color: #444;
            }

            .event-details p {
              margin: 0;
              font-size: 14px;
              color: #666;
            }

            @media (max-width: 600px) {
              .card-container {
                flex-direction: column;
                align-items: center;
              }
            }
           
          </style>
        </head>
        <body>
          <header>DHANALAKSHMI SRINIVASAN UNIVERSITY</header>
             <div class="card-container" >
            <div class="event-card">
              <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757072624/WhatsApp_Image_2025-09-05_at_14.01.17_r3gdf2.jpg" alt="Art Expo">
              <div class="event-details">
                <h3>TechFlare</h3>
                <p>The Department of Computer Science and Engineering  proudly hosted TechFlare 2025, a dynamic one-day symposium held on 22nd August 2025, bringing together the best of technical brilliance and non-technical creativity.</p>
              </div>
            </div>
            <div class="event-card">
              <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757074461/WhatsApp_Image_2025-09-05_at_17.42.47_a8afcj.jpg" alt="Art Expo">
              <div class="event-details">
                <h3>Ideathon</h3>
                <p>The Department of Computer Science and Engineering  proudly hosted Ideathon 2025, a dynamic one-day symposium held on 29nd April 2025, bringing together the best of technical brilliance and non-technical creativity.</p>
              </div>
            </div>
            
            
          </div>
          

         
        </body>
        </html>
      `);
        newPage.document.close();
    };
});

const bioevent = ["biomed-event", "biotech-event"];

bioevent.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        newPage.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>BIO-EVENT</title>
          <style>
            body {
              margin:0;
              font-family: 'Segoe UI', sans-serif;
              background-color: #f4f4f4;
            }

            header {
            width:100%;
              position:fixed;
              background-color:yellow;
              font-weight:bold;
              color:darkblue;
              padding: 20px;
              text-align: center;
              font-size: 2em;
              box-shadow: 0 4px 6px rgba(0,0,0,0.3);
            }


          h2 {
              text-align: center;
              color: #333;
              margin-bottom: 20px;
            }

            .card-container {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              gap: 20px;
            }

            .event-card {
              background: white;
              width: 100%;
              max-width: 300px;
              border-radius: 10px;
              box-shadow: 0 4px 12px rgba(0,0,0,0.1);
              overflow: hidden;
              transition: transform 0.3s ease;
              margin-top:30px;
            }

            .event-card:hover {
              transform: translateY(-5px);
              box-shadow: 0 8px 20px rgba(0,0,0,0.2);
            }

            .event-card img {
              width: 100%;
              height:25vh;
                background-size:cover;
            }

            .event-details {
              padding: 15px;
            }

            .event-details h3 {
              margin: 0 0 10px;
              font-size: 18px;
              color: #444;
            }

            .event-details p {
              margin: 0;
              font-size: 14px;
              color: #666;
            }

            @media (max-width: 600px) {
              .card-container {
                flex-direction: column;
                align-items: center;
              }
            }
           
          </style>
        </head>
        <body>
          <header>DHANALAKSHMI SRINIVASAN UNIVERSITY</header>
             <div class="card-container">
            <div class="event-card">
              <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757074111/WhatsApp_Image_2025-08-15_at_19.24.34_ql17s2.jpg" alt="Art Expo">
              <div class="event-details">
                <h3>BITP</h3>
                <p>The Department of Computer Science and Engineering  proudly hosted BITP 2025, a dynamic one-day symposium held on 24TH August 2025, bringing together the best of technical brilliance and non-technical creativity.</p>
              </div>
            </div>
            
            
          </div>
          

         
        </body>
        </html>
      `);
        newPage.document.close();
    };
});

const mechevent = ["mech-event"];

mechevent.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        newPage.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>MECH-EVENT</title>
          <style>
            body {
              margin:0;
              font-family: 'Segoe UI', sans-serif;
              background-color: #f4f4f4;
            }

            header {
            width:100%;
              position:fixed;
              background-color:yellow;
              font-weight:bold;
              color:darkblue;
              padding: 20px;
              text-align: center;
              font-size: 2em;
              box-shadow: 0 4px 6px rgba(0,0,0,0.3);
            }


          h2 {
              text-align: center;
              color: #333;
              margin-bottom: 20px;
            }

            .card-container {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              gap: 20px;
            }

            .event-card {
              background: white;
              width: 100%;
              max-width: 300px;
              border-radius: 10px;
              box-shadow: 0 4px 12px rgba(0,0,0,0.1);
              overflow: hidden;
              transition: transform 0.3s ease;
              margin-top:30px;
            }

            .event-card:hover {
              transform: translateY(-5px);
              box-shadow: 0 8px 20px rgba(0,0,0,0.2);
            }

            .event-card img {
              width: 100%;
              height:25vh;
                background-size:cover;
            }

            .event-details {
              padding: 15px;
            }

            .event-details h3 {
              margin: 0 0 10px;
              font-size: 18px;
              color: #444;
            }

            .event-details p {
              margin: 0;
              font-size: 14px;
              color: #666;
            }

            @media (max-width: 600px) {
              .card-container {
                flex-direction: column;
                align-items: center;
              }
            }
           
          </style>
        </head>
        <body>
          <header>DHANALAKSHMI SRINIVASAN UNIVERSITY</header>
             <div class="card-container" >
            <div class="event-card">
              <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757073693/WhatsApp_Image_2025-08-15_at_10.57.16_pissya.jpg" alt="Art Expo">
              <div class="event-details">
                <h3>ISHRAE</h3>
                <p>The Department of Mechanical and Engineering  proudly hosted ISHRAE 2025, bringing together the best of technical brilliance and non-technical creativity.</p>
              </div>
            </div>
            
            
          </div>
          

         
        </body>
        </html>
      `);
        newPage.document.close();
    };
});

const aidsfaculty = ["aids-faculty", "aiml-faculty", "cys-faculty", "it-faculty", "cse-faculty", "iot-faculty"];

aidsfaculty.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        newPage.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>FACULTY</title>
          <style>
            body {
              margin:0;
              font-family: 'Segoe UI', sans-serif;
              background-color: #f4f4f4;
            }

            header {
           
              background-color:yellow;
              font-weight:bold;
              color:darkblue;
              padding: 20px;
              text-align: center;
              font-size: 2em;
              box-shadow: 0 4px 6px rgba(0,0,0,0.3);
            }
            
    .card-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
     
    }

    .card {
     margin-top:10px;
      position: relative;
      flex: 1 1 300px;
      max-width: 300px;
      height: 250px;
      overflow: hidden;
      border-radius: 15px;
      box-shadow: 0 10px 20px rgba(0,0,0,0.2);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      animation: fadeIn 1s ease forwards;
      background-color: #fff;
    }

    .card:hover {
      transform: scale(1.05);
      box-shadow: 0 15px 30px rgba(0,0,0,0.3);
    }

    .card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.6);
      color: #fff;
      opacity: 0;
      transition: opacity 0.4s ease;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;
      text-align: center;
    }

    .card:hover .overlay,
    .card:active .overlay {
      opacity: 1;
    }

    .overlay h2 {
      margin: 0;
      font-size: 24px;
       margin-right: 40px;
    }

    .overlay p {
      font-size: 16px;
      margin-top: 10px;
        margin-right: 40px;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Responsive tweaks */
    @media (max-width: 576px) {
      .card {
        flex: 1 1 100%;
        height: 180px;
      
      }
      #specific_image{
          margin-top:120px;
      }
      header {
                width:100%;
                position:fixed;
              background-color:yellow;
              font-weight:bold;
              color:darkblue;
              padding: 20px;
              text-align: center;
              font-size: 2em;
              box-shadow: 0 4px 6px rgba(0,0,0,0.3);
            }
    }

    @media (min-width: 577px) and (max-width: 1024px) {
      .card {
        flex: 1 1 45%;
        height: 200px;
      }
      
    }

    @media (min-width: 1025px) {
   
      .card {
        flex: 1 1 22%;
        height: 250px;
        
      }
    }
          
          </style>
        </head>
        <body>
          <header>DHANALAKSHMI SRINIVASAN UNIVERSITY</header>
            <div class="card-container" >
                <div class="card" id="specific_image">
                  <img src="https://res.cloudinary.com/daom3xsqm/image/upload/v1757436879/WhatsApp_Image_2025-09-09_at_22.13.51_6960c8e7_tv3im4.jpg" alt=" Image">
                  <div class="overlay">
                    <h2>Vasuki</h2>
                    <p>Assistant professor.</p>
                  </div>
                </div>
            
                <div class="card">
                  <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757087279/WhatsApp_Image_2025-09-05_at_19.10.20_1_q5htta.jpg" alt=" Image">
                  <div class="overlay">
                    <h2> Sheba </h2>
                    <p>Assistant professor.</p>
                  </div>
                </div>
            
                <div class="card">
                  <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757087278/WhatsApp_Image_2025-09-05_at_19.05.23_1_hta0sk.jpg" alt="Image">
                  <div class="overlay">
                    <h2> Indra </h2>
                    <p>Assistant professor.</p>
                  </div>
                </div>
              
              <div class="card">
                  <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757087278/WhatsApp_Image_2025-09-05_at_19.10.21_jmdb8b.jpg" alt="Image">
                  <div class="overlay">
                    <h2>Kannan</h2>
                    <p>Assistant professor.</p>
                  </div>
                </div>
              
              <div class="card">
                  <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757087278/WhatsApp_Image_2025-09-05_at_19.10.23_1_p0a2it.jpg" alt="Image">
                  <div class="overlay">
                    <h2>Anitha</h2>
                    <p>Assistant professor.</p>
                  </div>
                </div>
              
              <div class="card">
                  <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757087279/WhatsApp_Image_2025-09-05_at_19.05.23_ffhnkx.jpg" alt="Image">
                  <div class="overlay">
                    <h2>Arthi</h2>
                    <p>Assistant professor</p>
                  </div>
                </div>
              
              <div class="card">
                  <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757087279/WhatsApp_Image_2025-09-05_at_19.10.20_plq5hb.jpg" alt="Image">
                  <div class="overlay">
                    <h2>Swarnalatha</h2>
                    <p>Assistant professor.</p>
                  </div>
                </div>
             
              <div class="card">
                  <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757087279/WhatsApp_Image_2025-09-05_at_19.10.22_rmppmr.jpg" alt="Image">
                  <div class="overlay">
                    <h2>Sathya</h2>
                    <p>Assistant professor.</p>
                  </div>
                </div>
              
              <div class="card">
                  <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757087278/WhatsApp_Image_2025-09-05_at_19.10.22_1_ohreaf.jpg" alt="Image">
                  <div class="overlay">
                    <h2>Jayshri</h2>
                    <p>Assistant professor</p>
                  </div>
                </div>
             
              <div class="card">
                  <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757087279/WhatsApp_Image_2025-09-05_at_19.10.23_kirnpa.jpg" alt="Image">
                  <div class="overlay">
                    <h2>Gowthami</h2>
                    <p>Assistant professor.</p>
                  </div>
                </div>
                
                 <div class="card">
                  <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757087280/WhatsApp_Image_2025-09-05_at_19.10.24_1_galubf.jpg" alt="Image">
                  <div class="overlay">
                    <h2>Senthil</h2>
                    <p>Assistant professor.</p>
                  </div>
                </div>
                
                <div class="card">
                  <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757087280/WhatsApp_Image_2025-09-05_at_19.10.21_1_e6sbk5.jpg" alt="Image">
                  <div class="overlay">
                    <h2>Tamil selvi</h2>
                    <p>Assistant professor.</p>
                  </div>
                </div>
                
                 <div class="card">
                  <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757087280/WhatsApp_Image_2025-09-05_at_19.10.24_wlmgkz.jpg" alt="Image">
                  <div class="overlay">
                    <h2>Anusuya</h2>
                    <p>Assistant professor.</p>
                  </div>
                </div>
                 <div class="card">
                  <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757087280/WhatsApp_Image_2025-09-05_at_19.05.32_yquufg.jpg" alt="Image">
                  <div class="overlay">
                    <h2>Kanimozhi</h2>
                    <p>Assistant professor.</p>
                  </div>
                </div>
                <div class="card">
                  <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757087280/WhatsApp_Image_2025-09-05_at_19.10.25_1_b5youe.jpg" alt="Image">
                  <div class="overlay">
                    <h2>Mahalakshmi</h2>
                    <p>Assistant professor</p>
                  </div>
                </div>
                 <div class="card">
                  <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757087281/WhatsApp_Image_2025-09-05_at_19.10.24_2_xuornd.jpg" alt="Image">
                  <div class="overlay">
                    <h2>Suvetha</h2>
                    <p>Assistant professor</p>
                  </div>
                </div>
                <div class="card">
                  <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757087281/WhatsApp_Image_2025-09-05_at_19.10.25_p314uu.jpg" alt="Image">
                  <div class="overlay">
                    <h2>Suguna</h2>
                    <p>Assistant professor</p>
                  </div>
                </div>
                <div class="card">
                  <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757087281/WhatsApp_Image_2025-09-05_at_19.10.26_tph4ao.jpg" alt="Image">
                  <div class="overlay">
                    <h2>saravanan</h2>
                    <p>Assistant professor.</p>
                  </div>
                </div>
              
         </div>
          

         
        </body>
        </html>
      `);
        newPage.document.close();
    };
});


const biomedfaculty = ["biomed-faculty"];

biomedfaculty.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        newPage.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>FACULTY</title>
          <style>
            body {
              margin:0;
              font-family: 'Segoe UI', sans-serif;
              background-color: #f4f4f4;
            }

            header {
           
              background-color:yellow;
              font-weight:bold;
              color:darkblue;
              padding: 20px;
              text-align: center;
              font-size: 2em;
              box-shadow: 0 4px 6px rgba(0,0,0,0.3);
            }
            
    .card-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
     
    }

    .card {
     margin-top:10px;
      position: relative;
      flex: 1 1 300px;
      max-width: 300px;
      height: 250px;
      overflow: hidden;
      border-radius: 15px;
      box-shadow: 0 10px 20px rgba(0,0,0,0.2);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      animation: fadeIn 1s ease forwards;
      background-color: #fff;
    }

    .card:hover {
      transform: scale(1.05);
      box-shadow: 0 15px 30px rgba(0,0,0,0.3);
    }

    .card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.6);
      color: #fff;
      opacity: 0;
      transition: opacity 0.4s ease;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;
      text-align: center;
    }

    .card:hover .overlay,
    .card:active .overlay {
      opacity: 1;
    }

    .overlay h2 {
      margin: 0;
      font-size: 24px;
       margin-right: 40px;
    }

    .overlay p {
      font-size: 16px;
      margin-top: 10px;
        margin-right: 40px;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Responsive tweaks */
    @media (max-width: 576px) {
      .card {
        flex: 1 1 100%;
        height: 180px;
      
      }
      #specific_image{
          margin-top:120px;
      }
      header {
                width:100%;
                position:fixed;
              background-color:yellow;
              font-weight:bold;
              color:darkblue;
              padding: 20px;
              text-align: center;
              font-size: 2em;
              box-shadow: 0 4px 6px rgba(0,0,0,0.3);
            }
    }

    @media (min-width: 577px) and (max-width: 1024px) {
      .card {
        flex: 1 1 45%;
        height: 200px;
      }
      
    }

    @media (min-width: 1025px) {
   
      .card {
        flex: 1 1 22%;
        height: 250px;
        
      }
    }
          
          </style>
        </head>
        <body>
          <header>DHANALAKSHMI SRINIVASAN UNIVERSITY</header>
            <div class="card-container" >
                <div class="card"  id="specific_image" >
                  <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757089005/WhatsApp_Image_2025-09-05_at_19.58.35_wt8fzq.jpg" alt=" Image">
                  <div class="overlay">
                    <h2>Sankar</h2>
                    <p>Assistant professor.</p>
                  </div>
                </div>
            
                <div class="card">
                  <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757089006/WhatsApp_Image_2025-09-05_at_19.58.38_hjn40b.jpg" alt=" Image">
                  <div class="overlay">
                    <h2>Jeeva</h2>
                    <p>Assistant professor.</p>
                  </div>
                </div>
            
                <div class="card">
                  <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757089006/WhatsApp_Image_2025-09-05_at_19.58.36_1_n5bxyj.jpg" alt="Image">
                  <div class="overlay">
                    <h2>Abarna</h2>
                    <p>Assistant professor.</p>
                  </div>
                </div>
                 <div class="card">
                  <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757089006/WhatsApp_Image_2025-09-05_at_19.58.38_1_rojagr.jpg" alt="Image">
                  <div class="overlay">
                    <h2>Venkatachalam</h2>
                    <p>Assistant professor.</p>
                  </div>
                </div>
                <div class="card">
                  <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757089006/WhatsApp_Image_2025-09-05_at_19.58.36_pds3ft.jpg" alt="Image">
                  <div class="overlay">
                    <h2>Elancheran</h2>
                    <p>Assistant professor</p>
                  </div>
                </div>
                <div class="card">
                  <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757089006/WhatsApp_Image_2025-09-05_at_19.58.39_xpmbts.jpg" alt="Image">
                  <div class="overlay">
                    <h2>Gomathi</h2>
                    <p>Assistant professor.</p>
                  </div>
                </div>
                <div class="card">
                  <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757089017/WhatsApp_Image_2025-09-05_at_19.58.37_1_q7rwts.jpg" alt="Image">
                  <div class="overlay">
                    <h2>Arun chander</h2>
                    <p>Assistant professor</p>
                  </div>
                </div>
                <div class="card">
                  <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757089018/WhatsApp_Image_2025-09-05_at_19.58.37_skgcrv.jpg" alt="Image">
                  <div class="overlay">
                    <h2>Vijayreka</h2>
                    <p>Assistant professor</p>
                  </div>
                </div>
              
              
              
         </div>
          

         
        </body>
        </html>
      `);
        newPage.document.close();
    };
});

const biotechfaculty = ["biotech-faculty"];

biotechfaculty.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        newPage.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>FACULTY</title>
          <style>
            body {
              margin:0;
              font-family: 'Segoe UI', sans-serif;
              background-color: #f4f4f4;
            }

            header {
           
              background-color:yellow;
              font-weight:bold;
              color:darkblue;
              padding: 20px;
              text-align: center;
              font-size: 2em;
              box-shadow: 0 4px 6px rgba(0,0,0,0.3);
            }
            
    .card-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
     
    }

    .card {
     margin-top:10px;
      position: relative;
      flex: 1 1 300px;
      max-width: 300px;
      height: 250px;
      overflow: hidden;
      border-radius: 15px;
      box-shadow: 0 10px 20px rgba(0,0,0,0.2);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      animation: fadeIn 1s ease forwards;
      background-color: #fff;
    }

    .card:hover {
      transform: scale(1.05);
      box-shadow: 0 15px 30px rgba(0,0,0,0.3);
    }

    .card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.6);
      color: #fff;
      opacity: 0;
      transition: opacity 0.4s ease;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;
      text-align: center;
    }

    .card:hover .overlay,
    .card:active .overlay {
      opacity: 1;
    }

    .overlay h2 {
      margin: 0;
      font-size: 24px;
       margin-right: 40px;
    }

    .overlay p {
      font-size: 16px;
      margin-top: 10px;
        margin-right: 40px;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Responsive tweaks */
    @media (max-width: 576px) {
      .card {
        flex: 1 1 100%;
        height: 180px;
      
      }
      #specific_image{
          margin-top:120px;
      }
      header {
                width:100%;
                position:fixed;
              background-color:yellow;
              font-weight:bold;
              color:darkblue;
              padding: 20px;
              text-align: center;
              font-size: 2em;
              box-shadow: 0 4px 6px rgba(0,0,0,0.3);
            }
    }

    @media (min-width: 577px) and (max-width: 1024px) {
      .card {
        flex: 1 1 45%;
        height: 200px;
      }
      
    }

    @media (min-width: 1025px) {
   
      .card {
        flex: 1 1 22%;
        height: 250px;
        
      }
    }
          
          </style>
        </head>
        <body>
          <header>DHANALAKSHMI SRINIVASAN UNIVERSITY</header>
            <div class="card-container" >
                <div class="card" id="specific_image">
                  <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757089591/WhatsApp_Image_2025-09-05_at_20.10.10_xs8hhn.jpg" alt=" Image">
                  <div class="overlay">
                    <h2>Sheela</h2>
                    <p>Assistant professor.</p>
                  </div>
                </div>
            
                <div class="card">
                  <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757089593/WhatsApp_Image_2025-09-05_at_20.10.11_h0p8lo.jpg" alt=" Image">
                  <div class="overlay">
                    <h2>Winny</h2>
                    <p>Assistant professor.</p>
                  </div>
                </div>
            
                <div class="card">
                  <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757089595/WhatsApp_Image_2025-09-05_at_20.10.12_1_gvnfqz.jpg" alt="Image">
                  <div class="overlay">
                    <h2>Bharathi</h2>
                    <p>Assistant professor.</p>
                  </div>
                </div>
                 <div class="card">
                  <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757089597/WhatsApp_Image_2025-09-05_at_20.10.12_sclvgl.jpg" alt="Image">
                  <div class="overlay">
                    <h2>Jane Yazhini</h2>
                    <p>Assistant professor.</p>
                  </div>
                </div>
                
              
              
         </div>
          

         
        </body>
        </html>
      `);
        newPage.document.close();
    };
});


const ecefaculty = ["eee-faculty", "ece-faculty"];

ecefaculty.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        newPage.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>FACULTY</title>
          <style>
            body {
              margin:0;
              font-family: 'Segoe UI', sans-serif;
              background-color: #f4f4f4;
            }

            header {
           
              background-color:yellow;
              font-weight:bold;
              color:darkblue;
              padding: 20px;
              text-align: center;
              font-size: 2em;
              box-shadow: 0 4px 6px rgba(0,0,0,0.3);
            }
            
    .card-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
     
    }

    .card {
     margin-top:10px;
      position: relative;
      flex: 1 1 300px;
      max-width: 300px;
      height: 250px;
      overflow: hidden;
      border-radius: 15px;
      box-shadow: 0 10px 20px rgba(0,0,0,0.2);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      animation: fadeIn 1s ease forwards;
      background-color: #fff;
    }

    .card:hover {
      transform: scale(1.05);
      box-shadow: 0 15px 30px rgba(0,0,0,0.3);
    }

    .card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.6);
      color: #fff;
      opacity: 0;
      transition: opacity 0.4s ease;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;
      text-align: center;
    }

    .card:hover .overlay,
    .card:active .overlay {
      opacity: 1;
    }

    .overlay h2 {
      margin: 0;
      font-size: 24px;
       margin-right: 40px;
    }

    .overlay p {
      font-size: 16px;
      margin-top: 10px;
        margin-right: 40px;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Responsive tweaks */
    @media (max-width: 576px) {
      .card {
        flex: 1 1 100%;
        height: 180px;
      
      }
      #specific_image{
          margin-top:120px;
      }
      header {
                width:100%;
                position:fixed;
              background-color:yellow;
              font-weight:bold;
              color:darkblue;
              padding: 20px;
              text-align: center;
              font-size: 2em;
              box-shadow: 0 4px 6px rgba(0,0,0,0.3);
            }
    }

    @media (min-width: 577px) and (max-width: 1024px) {
      .card {
        flex: 1 1 45%;
        height: 200px;
      }
      
    }

    @media (min-width: 1025px) {
   
      .card {
        flex: 1 1 22%;
        height: 250px;
        
      }
    }
          
          </style>
        </head>
        <body>
          <header>DHANALAKSHMI SRINIVASAN UNIVERSITY</header>
            <div class="card-container" >
                <div class="card" id="specific_image">
                  <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757089999/WhatsApp_Image_2025-09-05_at_19.21.11_1_lq1f5k.jpg" alt=" Image">
                  <div class="overlay">
                    <h2> Geetha</h2>
                    <p>Assistant professor.</p>
                  </div>
                </div>
            
                <div class="card">
                  <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757090001/WhatsApp_Image_2025-09-05_at_19.21.11_2_yfic3e.jpg" alt=" Image">
                  <div class="overlay">
                    <h2>Indirajith</h2>
                    <p>Assistant professor.</p>
                  </div>
                </div>
            
                <div class="card">
                  <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757090002/WhatsApp_Image_2025-09-05_at_19.21.13_1_igtepf.jpg" alt="Image">
                  <div class="overlay">
                    <h2>Nathiya</h2>
                    <p>Assistant professor</p>
                  </div>
                </div>
                 <div class="card">
                  <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757090005/WhatsApp_Image_2025-09-05_at_19.21.13_lezpgf.jpg" alt="Image">
                  <div class="overlay">
                    <h2>Dhayalini</h2>
                    <p>Assistant professor.</p>
                  </div>
                </div>
                <div class="card">
                  <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757090004/WhatsApp_Image_2025-09-05_at_19.21.11_rra6cs.jpg" alt="Image">
                  <div class="overlay">
                    <h2>Suresh</h2>
                    <p>Assistant professor.</p>
                  </div>
                </div>
                <div class="card">
                  <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757090010/WhatsApp_Image_2025-09-05_at_19.21.14_ntbis7.jpg" alt="Image">
                  <div class="overlay">
                    <h2>ismail gani</h2>
                    <p>Assistant professor.</p>
                  </div>
                </div>
                <div class="card">
                  <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757090017/WhatsApp_Image_2025-09-05_at_19.21.12_1_x1y8e4.jpg" alt="Image">
                  <div class="overlay">
                    <h2>Dorothy</h2>
                    <p>Assistant professor.</p>
                  </div>
                </div>
                <div class="card">
                  <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757090018/WhatsApp_Image_2025-09-05_at_19.21.12_xnavwb.jpg" alt="Image">
                  <div class="overlay">
                    <h2>Deepan kumar</h2>
                    <p>Assistant professor.</p>
                  </div>
                </div>
                
                
              
              
         </div>
          

         
        </body>
        </html>
      `);
        newPage.document.close();
    };
});


const mechfaculty = ["mech-faculty"];

mechfaculty.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        newPage.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>FACULTY</title>
          <style>
            body {
              margin:0;
              font-family: 'Segoe UI', sans-serif;
              background-color: #f4f4f4;
            }

            header {
           
              background-color:yellow;
              font-weight:bold;
              color:darkblue;
              padding: 20px;
              text-align: center;
              font-size: 2em;
              box-shadow: 0 4px 6px rgba(0,0,0,0.3);
            }
            
    .card-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
     
    }

    .card {
     margin-top:10px;
      position: relative;
      flex: 1 1 300px;
      max-width: 300px;
      height: 250px;
      overflow: hidden;
      border-radius: 15px;
      box-shadow: 0 10px 20px rgba(0,0,0,0.2);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      animation: fadeIn 1s ease forwards;
      background-color: #fff;
    }

    .card:hover {
      transform: scale(1.05);
      box-shadow: 0 15px 30px rgba(0,0,0,0.3);
    }

    .card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.6);
      color: #fff;
      opacity: 0;
      transition: opacity 0.4s ease;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;
      text-align: center;
    }

    .card:hover .overlay,
    .card:active .overlay {
      opacity: 1;
    }

    .overlay h2 {
      margin: 0;
      font-size: 24px;
       margin-right: 40px;
    }

    .overlay p {
      font-size: 16px;
      margin-top: 10px;
        margin-right: 40px;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Responsive tweaks */
    @media (max-width: 576px) {
      .card {
        flex: 1 1 100%;
        height: 180px;
      
      }
      #specific_image{
          margin-top:120px;
      }
      header {
                width:100%;
                position:fixed;
              background-color:yellow;
              font-weight:bold;
              color:darkblue;
              padding: 20px;
              text-align: center;
              font-size: 2em;
              box-shadow: 0 4px 6px rgba(0,0,0,0.3);
            }
    }

    @media (min-width: 577px) and (max-width: 1024px) {
      .card {
        flex: 1 1 45%;
        height: 200px;
      }
      
    }

    @media (min-width: 1025px) {
   
      .card {
        flex: 1 1 22%;
        height: 250px;
        
      }
    }
          
          </style>
        </head>
        <body>
          <header>DHANALAKSHMI SRINIVASAN UNIVERSITY</header>
            <div class="card-container" >
                <div class="card" id="specific_image">
                  <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757090345/WhatsApp_Image_2025-09-05_at_19.53.06_hw825h.jpg" alt=" Image">
                  <div class="overlay">
                    <h2>Nageswaran</h2>
                    <p>Assistant professor.</p>
                  </div>
                </div>
            
                <div class="card">
                  <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757090347/WhatsApp_Image_2025-09-05_at_19.53.07_1_m13txv.jpg" alt=" Image">
                  <div class="overlay">
                    <h2>Manickam</h2>
                    <p>Assistant professor.</p>
                  </div>
                </div>
            
                <div class="card">
                  <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757090349/WhatsApp_Image_2025-09-05_at_19.53.08_b4opyj.jpg" alt="Image">
                  <div class="overlay">
                    <h2>Amal rebin</h2>
                    <p>Assistant professor.</p>
                  </div>
                </div>
                 <div class="card">
                  <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757090349/WhatsApp_Image_2025-09-05_at_19.53.07_inarnb.jpg" alt="Image">
                  <div class="overlay">
                    <h2>Muthu kumar</h2>
                    <p>Assistant professor.</p>
                  </div>
                </div>
                <div class="card">
                  <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757090351/WhatsApp_Image_2025-09-05_at_19.53.08_1_chyraa.jpg" alt="Image">
                  <div class="overlay">
                    <h2>Balamurugan</h2>
                    <p>Assistant professor.</p>
                  </div>
                </div>
                <div class="card">
                  <img src="https://res.cloudinary.com/dpkuxu8mr/image/upload/v1757090362/WhatsApp_Image_2025-09-05_at_19.53.09_moniaf.jpg" alt="Image">
                  <div class="overlay">
                    <h2>Ramesh</h2>
                    <p>AD</p>
                  </div>
                </div>
                
              
         </div>
          

         
        </body>
        </html>
      `);
        newPage.document.close();
    };
});


const academics = ["dsu-academics"];

academics.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        newPage.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Academics</title>
          <style>
             body {
      font-family: 'Segoe UI', sans-serif;
      margin: 0;
      padding: 0;
      background: #FAFDD6;
    }

    .program-section {
      padding: 40px 20px;
      text-align: center;
    }

    .program-section h2 {
      font-size: 2rem;
      margin-bottom: 30px;
      color: #2c3e50;
    }

    .program-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
    }

    .program-card {
      background: white;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      border-radius: 10px;
      width: 280px;
      padding: 20px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      animation: fadeInUp 0.8s ease forwards;
      opacity: 0;
    }

    .program-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0,0,0,0.2);
    }

    .program-card h3 {
      margin: 0;
      font-size: 1.1rem;
      color: #0077cc;
    }

    @keyframes fadeInUp {
      from {
        transform: translateY(20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    @media (max-width: 600px) {
      .program-card {
        width: 90%;
      }
    }

    @media (min-width: 601px) and (max-width: 1024px) {
      .program-card {
        width: 45%;
      }
    }

    @media (min-width: 1025px) {
      .program-card {
        width: 280px;
      }
    }
    .center_dsu-cal{
        display:flex;
        justify-content:center;
       align-items:center;
    }
    .calendar-section {
        
      text-align: center;
      padding: 40px 20px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 6px 12px rgba(0,0,0,0.1);
      animation: fadeIn 0.8s ease forwards;
      opacity: 0;
    }

    .calendar-section h2 {
      font-size: 2rem;
      margin-bottom: 20px;
      color: #2c3e50;
    }
    .calendar-section a {
      display: inline-block;
      padding: 12px 24px;
      font-size: 1rem;
      color: white;
      background-color: #0077cc;
      border-radius: 8px;
      text-decoration: none;
      transition: background-color 0.3s ease, transform 0.3s ease;
    }

    .calendar-section a:hover {
      background-color: #005fa3;
      transform: scale(1.05);
    }

    @keyframes fadeIn {
      from {
        transform: translateY(20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
    @media (max-width: 600px) {
      .calendar-section {
        width: 90%;
      }
    }

    @media (min-width: 601px) and (max-width: 1024px) {
      .calendar-section {
        width: 60%;
      }
    }

    @media (min-width: 1025px) {
      .calendar-section {
        width: 40%;
      }
    }
    .library-section {
      padding: 40px 20px;
      max-width: 1000px;
      margin: auto;
    
      animation: fadeIn 0.8s ease forwards;
      opacity: 0;
    }

    .library-section h2 {
      font-size: 2rem;
      margin-bottom: 20px;
      color: #2c3e50;
      text-align: center;
    }

    .library-section p {
      font-size: 1rem;
      line-height: 1.6;
      color: #444;
      margin-bottom: 30px;
      text-align: justify;
    }

    .library-section h3 {
      font-size: 1.3rem;
      margin-top: 30px;
      margin-bottom: 10px;
      color:black;
    }

    .library-section ul {
      list-style-type: disc;
      padding-left: 20px;
      margin-bottom: 30px;
    }

    .library-section ul li {
      margin-bottom: 8px;
      font-size: 1rem;
      color: #333;
    }

    .library-section a {
      display: block;
      margin-bottom: 8px;
      color: #0077cc;
      text-decoration: none;
      font-size: 1rem;
    }

    .library-section a:hover {
      text-decoration: underline;
    }

    @keyframes fadeIn {
      from {
        transform: translateY(20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    @media (max-width: 600px) {
      .library-section {
        padding: 20px;
      }
    }
    
          </style>
        </head>
        <body>
          <section class="program-section">
        <h2>School of Engineering & Technology</h2>
        <h3>Under & Post graduate - Programmes Offered</h3>
        <div class="program-container">
          <div class="program-card"><h3>B.Tech - Computer Science and Engineering</h3></div>
          <div class="program-card"><h3>B.Tech - CSE (Cyber Security)</h3></div>
          <div class="program-card"><h3>B.Tech - AI & Machine Learning</h3></div>
          <div class="program-card"><h3>B.Tech - AI & ML (IoT)</h3></div>
          <div class="program-card"><h3>B.Tech - Information Technology</h3></div>
          <div class="program-card"><h3>B.Tech - Biomedical Engineering</h3></div>
          <div class="program-card"><h3>B.Tech - Agricultural Engineering</h3></div>
          <div class="program-card"><h3>B.Tech - Mechanical Engineering</h3></div>
          <div class="program-card"><h3>B.Tech - Civil Engineering</h3></div>
          <div class="program-card"><h3>B.Tech - Electrical & Communication Engineering</h3></div>
          <div class="program-card"><h3>B.Tech - Electrical & Electronics Engineering</h3></div>
          <div class="program-card"><h3>B.Tech - Electronics & Communication (VLSI Design)</h3></div>
          <div class="program-card"><h3>M.Tech - Computer Science and Engineering</h3></div>
          <div class="program-card"><h3>M.Tech - CSE (Big Data Analytics)</h3></div>
          <div class="program-card"><h3>M.Tech - Internet of Things</h3></div>
        </div>
        
      </section>
      
      <div>
      <section class="library-section">
        <h2>Library</h2>
        <p>
          Dhanalakshmi Srinivasan University houses a centrally air-conditioned library containing 52,136 volumes of books on various subjects. Many of them are rare and invaluable. The library subscribes to periodicals inclusive of 250 national and international journals and more than 5,000 e-journals.
          Our library is fully computerized to cater to the needs of the students and faculty members of the college. Most library functions such as issue, return, reservation, and searching of books have been automated by installing exclusive MODERNLIB software. Our library is connected with DELNET (Developing Library Network) New Delhi, through which our students are able to access the records and database of 6,300 libraries in 33 States and Union Territories in India and eight other countries. It is a major operational Library network in South Asia. It provides access to more than 3 crore bibliographic records of Books, Journal articles, etc. in addition to several full-text databases as of date.
        </p>

        <h3>LIBRARY SERVICES & FACILITIES:</h3>
        <ul>
          <li>Circulation Service</li>
          <li>Reference Service</li>
          <li>OPAC</li>
          <li>Reservation Facility</li>
          <li>Renewal Service</li>
          <li>Inter-Library Loan</li>
          <li>Reprographic Facility</li>
          <li>Back Volumes / Projects</li>
          <li>New Arrivals Display</li>
        </ul>

        <h3>USEFUL LINKS FOR E-books and E-Journals:</h3>
        <a href="https://www.delnet.nic.in" target="_blank">www.delnet.nic.in</a>
        <a href="https://www.pdfdrive.com" target="_blank">www.pdfdrive.com</a>
        <a href="https://www.booknet.com" target="_blank">www.booknet.com</a>
        <a href="https://www.librivox.com" target="_blank">www.librivox.com</a>
        <a href="https://www.manubooks.com" target="_blank">www.manubooks.com</a>
        <a href="https://www.libgen.rs" target="_blank">www.libgen.rs</a>
        <a href="https://scholar.google.com" target="_blank">www.scholar.google.com</a>

        <h3>USEFUL LINKS FOR E-JOURNALS:</h3>
        <a href="https://www.ias.ac.in" target="_blank">www.ias.ac.in</a>
        <a href="https://www.icar.org.in/icar-journals" target="_blank">www.icar.org.in/icar-journals</a>
        <a href="https://ilslaw.edu/library/free-e-journals-e-books/" target="_blank">ilslaw.edu/library/free-e-journals-e-books</a>
        <a href="https://ies.ed.gov/" target="_blank">www.ies.ed.gov</a>
        <a href="https://www.zendy.io" target="_blank">www.zendy.io</a>
        <a href="https://www.findyouramswers.com" target="_blank">www.findyouramswers.com</a>
      </section>
      </div>
      <div class="center_dsu-cal">
      <section class="calendar-section">
        <h2>Futher details about Academics</h2>
        <iframe src="https://www.dsuniversity.ac.in/academic-programs" width="100%" height="600px" style="border: 1px solid #ccc; margin-top: 20px;">
          Your browser does not support iframes. <a href="https://www.dsuniversity.ac.in/academic-programs"></a>
        </iframe>
      </section>
      </div>
        </body>
        </html>
      `);
        newPage.document.close();
    };
});


const research = ["dsu-research"];

research.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        newPage.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Research</title>
          <style>
             body {
      font-family: 'Segoe UI', sans-serif;
      margin: 0;
      padding: 0;
      background: #F6F1E9;
    }

    .rd-section {
      padding: 40px 20px;
      max-width: 1000px;
      margin: auto;
      animation: fadeIn 0.8s ease forwards;
      opacity: 0;
    }
    

    .rd-section h2 {
      font-size: 2rem;
      margin-bottom: 20px;
      color: #2c3e50;
      text-align: center;
    }

    .rd-section h3 {
      font-size: 1.3rem;
      margin-top: 30px;
      margin-bottom: 10px;
      color: #0077cc;
    }

    .rd-section p {
      font-size: 1rem;
      line-height: 1.6;
      color: #444;
      text-align: justify;
      margin-bottom: 20px;
    }

    .rd-section ul {
      list-style-type: disc;
      padding-left: 20px;
      margin-bottom: 30px;
    }

    .rd-section ul li {
      margin-bottom: 8px;
      font-size: 1rem;
      color: #333;
    }

    @keyframes fadeIn {
      from {
        transform: translateY(20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    @media (max-width: 600px) {
      .rd-section {
        padding: 20px;
      }
    }
    .pub-section {
      max-width: 900px;
      margin: 40px auto;
      padding: 30px;
      animation: fadeIn 0.8s ease forwards;
      opacity: 0;
    }

    .pub-section h2 {
      font-size: 2rem;
      color: #2c3e50;
      margin-bottom: 20px;
      text-align: center;
    }

    .pub-section p {
      font-size: 1rem;
      color: #444;
      margin-bottom: 20px;
      text-align: center;
    }

    .pub-section ul {
      padding-left: 0;
      max-height: 500px;
      overflow-y: auto;
    }

    .pub-section ul li {
      margin-bottom: 12px;
      font-size: 1rem;
      word-break: break-word;
    }

    .pub-section ul li a {
      color: #0077cc;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .pub-section ul li a:hover {
      color: #005fa3;
      text-decoration: underline;
    }

    @keyframes fadeIn {
      from {
        transform: translateY(20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    @media (max-width: 600px) {
      .pub-section {
        padding: 20px;
      }
    }
    .collab-section {
      max-width: 1000px;
      margin: 40px auto;
      padding: 30px;
      animation: fadeIn 0.8s ease forwards;
      opacity: 0;
    }

    .collab-section h2 {
      font-size: 2rem;
      color: #2c3e50;
      margin-bottom: 20px;
      text-align: center;
    }

    .collab-section img {
      width: 100%;
      border-radius: 10px;
      margin-bottom: 20px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }

    .collab-section p {
      font-size: 1rem;
      line-height: 1.6;
      color: #444;
      text-align: justify;
      margin-bottom: 20px;
    }

    .collab-section ul {
      list-style-type: upper-alpha;
      padding-left: 20px;
      margin-bottom: 20px;
    }

    .collab-section ul li {
      margin-bottom: 10px;
      font-size: 1rem;
      color: #333;
    }

    @keyframes fadeIn {
      from {
        transform: translateY(20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    @media (max-width: 600px) {
      .collab-section {
        padding: 20px;
      }
    }
    .industry-section {
      max-width: 1000px;
      margin: 40px auto;
      padding: 30px;
      animation: fadeIn 0.8s ease forwards;
      opacity: 0;
    }

    .industry-section h2 {
      font-size: 2rem;
      color: #2c3e50;
      margin-bottom: 20px;
      text-align: center;
    }

    .industry-section p {
      font-size: 1rem;
      line-height: 1.6;
      color: #444;
      text-align: justify;
      margin-bottom: 20px;
    }

    .industry-section h3 {
      font-size: 1.3rem;
      color: #1a5276;
      margin-top: 30px;
      margin-bottom: 10px;
    }

    .industry-section ul {
      list-style-type: none;
      padding-left: 0;
    }

    .industry-section ul li {
      margin-bottom: 20px;
      padding-left: 15px;
      border-left: 4px solid #3498db;
    }

    .industry-section ul li strong {
      display: block;
      font-size: 1.1rem;
      color: #2c3e50;
      margin-bottom: 5px;
    }

    @keyframes fadeIn {
      from {
        transform: translateY(20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    @media (max-width: 600px) {
      .industry-section {
        padding: 20px;
      }
    }
     .center_dsu-cal{
        display:flex;
        justify-content:center;
       align-items:center;
    }
    .calendar-section {
        
      text-align: center;
      padding: 40px 20px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 6px 12px rgba(0,0,0,0.1);
      animation: fadeIn 0.8s ease forwards;
      opacity: 0;
    }

    .calendar-section h2 {
      font-size: 2rem;
      margin-bottom: 20px;
      color: #2c3e50;
    }
    .calendar-section a {
      display: inline-block;
      padding: 12px 24px;
      font-size: 1rem;
      color: white;
      background-color: #0077cc;
      border-radius: 8px;
      text-decoration: none;
      transition: background-color 0.3s ease, transform 0.3s ease;
    }

    .calendar-section a:hover {
      background-color: #005fa3;
      transform: scale(1.05);
    }

    @keyframes fadeIn {
      from {
        transform: translateY(20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
    @media (max-width: 600px) {
      .calendar-section {
        width: 90%;
      }
    }

    @media (min-width: 601px) and (max-width: 1024px) {
      .calendar-section {
        width: 60%;
      }
    }

    @media (min-width: 1025px) {
      .calendar-section {
        width: 40%;
      }
    }
          </style>
        </head>
        <body>
          <section class="rd-section">
        <h2>Research & Development Cell</h2>
        <p>
          Dhanalakshmi Srinivasan University (DSU) realises the pivotal role of innovation, research, and development in fostering academic excellence and societal advancement. The Research and Development Cell (R&D Cell) at DSU serves as the center for catalyzing and coordinating multidisciplinary research endeavors, fostering innovation, and promoting industry-academia collaborations.
        </p>

        <h3>Vision:</h3>
        <p>"To be a pioneering hub of transformative research, innovation, and collaboration, driving academic excellence and societal progress."</p>

        <h3>Mission:</h3>
        <p>
          The primary mission of the R&D Cell at DSU is to create an ecosystem that nurtures a culture of research and innovation across disciplines. It endeavors to facilitate cutting-edge research, encourage entrepreneurial initiatives, and promote academic-industrial partnerships to address societal challenges and contribute to global knowledge.
        </p>

        <h3>Objectives:</h3>
        <ul>
          <li>Encourage and facilitate faculty and student research across various disciplines.</li>
          <li>Foster an environment conducive to innovation, creativity, and problem-solving.</li>
          <li>Promote collaborative research projects within the university and with external institutions.</li>
          <li>Provide resources, infrastructure, and funding support for research initiatives.</li>
          <li>Facilitate the dissemination of research findings through publications, conferences, and patents.</li>
          <li>Forge strong collaborations with industries to address real-world challenges and promote technology transfer.</li>
          <li>Promote entrepreneurship and support startups based on innovative ideas developed within the university.</li>
          <li>Identify the thrust areas of research of the University.</li>
          <li>Extend support for researchers and faculty in project proposals and oversee post-sanctioning of research grants.</li>
          <li>Develop University Research Information System for consultancy and services.</li>
          <li>Organize workshops and training programs.</li>
          <li>Maintain research ethics and integrity including necessary committee clearances.</li>
        </ul>

        <h3>Functions:</h3>
        <ul>
          <li><strong>Grant Management:</strong> Assisting faculty in identifying funding opportunities and supporting grant applications.</li>
          <li><strong>Research Support:</strong> Providing infrastructure, laboratories, and access to state-of-the-art facilities.</li>
          <li><strong>Collaboration Initiatives:</strong> Encouraging interdisciplinary research and partnerships.</li>
          <li><strong>Intellectual Property Rights (IPR):</strong> Facilitating protection of intellectual property through patents and licensing.</li>
          <li><strong>Research Promotion:</strong> Organizing seminars, workshops, and conferences to foster research acumen.</li>
          <li><strong>Industry Interaction:</strong> Establishing platforms for industry-academia collaboration and internships.</li>
        </ul>
      </section>
    
      <section class="pub-section">
        <h2>Publications</h2>
        <p>Direct Links for Research Articles Published by Faculty Members of DSU:</p>
        <ul>
          <li><a href="https://lgjdxcn.asia/public_article.php?article=147" target="_blank">Journal of Liaoning Technical University</a></li>
          <li><a href="https://www.sciencedirect.com/science/article/abs/pii/S0040603123000230" target="_blank">Thin Solid Films – Elsevier</a></li>
          <li><a href="https://www.sciencedirect.com/science/article/abs/pii/S0272884222043504/" target="_blank">Ceramics International – Elsevier</a></li>
          <li><a href="https://www.sciencedirect.com/science/article/abs/pii/S2352492823013314" target="_blank">Heliyon – Elsevier</a></li>
          <li><a href="https://periodicos.uefs.br/index.php/sociobiology/article/view/7698/8307" target="_blank">Sociobiology – UEFS</a></li>
          <li><a href="https://entomon.in/index.php/Entomon/article/view/938" target="_blank">Entomon Journal – Article 938</a></li>
          <li><a href="https://entomon.in/index.php/Entomon/article/view/900" target="_blank">Entomon Journal – Article 900</a></li>
          <li><a href="https://www.sciencedirect.com/science/article/pii/S026974912301504X" target="_blank">Environmental Pollution – Elsevier</a></li>
          <li><a href="https://link.springer.com/article/10.1007/s11085-023-10171-5" target="_blank">Springer – Metallurgical and Materials Transactions</a></li>
          <li><a href="https://www.sciencedirect.com/science/article/abs/pii/S0167577X23000381" target="_blank">Materials Letters – Elsevier</a></li>
          <li><a href="https://www.sciencedirect.com/science/article/abs/pii/S2451904923003359" target="_blank">Materials Today: Proceedings</a></li>
          <li><a href="https://www.gdzjg.org/index.php/JOL/article/view/1175" target="_blank">Journal of Logistics – Article 1175</a></li>
          <li><a href="https://www.gdzjg.org/index.php/JOL/article/view/1173" target="_blank">Journal of Logistics – Article 1173</a></li>
          <li><a href="https://pubs.rsc.org/en/content/articlelanding/2023/nj/d3nj02153j/unauth" target="_blank">Royal Society of Chemistry – New Journal of Chemistry</a></li>
          <li><a href="https://www.frontiersin.org/articles/10.3389/fenrg.2022.1018088/full" target="_blank">Frontiers in Energy Research</a></li>
          <li><a href="https://www.sciencedirect.com/science/article/abs/pii/S2214785322034253" target="_blank">Sustainable Cities and Society – Elsevier</a></li>
          <li><a href="https://link.springer.com/article/10.1007/s41939-023-00238-w#citeas" target="_blank">Springer – Journal of Materials Engineering</a></li>
          <li><a href="https://ijeecs.iaescore.com/index.php/IJEECS/article/view/30988/17576" target="_blank">IJEECS – Article 30988</a></li>
          <li><a href="https://ictactjournals.in/paper/IJCT_Vol_14_Iss_3_Paper_10_3024_3028.pdf" target="_blank">IJCT – Volume 14 Issue 3</a></li>
          <li><a href="https://ijeecs.iaescore.com/index.php/IJEECS/article/view/30808/17381" target="_blank">IJEECS – Article 30808</a></li>
          <li><a href="https://www.tandfonline.com/doi/abs/10.1080/01969722.2023.2175137" target="_blank">Taylor & Francis – Journal of Dispersion Science</a></li>
          <li><a href="https://beei.org/index.php/EEI/article/view/4502/3133" target="_blank">Bulletin of Electrical Engineering and Informatics</a></li>
          <li><a href="https://ijeecs.iaescore.com/index.php/IJEECS/article/view/28973/17162" target="_blank">IJEECS – Article 28973</a></li>
        </ul>
      </section>
      
    <section class="collab-section">
        <h2>Foreign Collaboration</h2>
        <img src="https://res.cloudinary.com/dmlnjx6ga/image/upload/v1757356751/Kadiri-pic-01_vdccii.jpg" alt="DSU-Kadiri University MoU">
        <p>
          Dhanalakshmi Srinivasan University, Tiruchirappalli, Tamil Nadu has signed a Memorandum of Understanding with Kadiri University, Indonesia to develop academic and cultural interchange in the areas of education, research, culture and other activities, and to cooperate and work together towards Internationalization of higher education.
        </p>
        <h3>The objective of the MoU includes:</h3>
        <ul>
          <li>Exchange of professors and faculty members.</li>
          <li>Exchange of students through transfer program, top-up and fast-track program, internship, exchange and visits, as appropriate.</li>
          <li>Exchange of information, academic materials and publications in fields of mutual interest.</li>
          <li>Joint conferences and research projects.</li>
          <li>Joint cultural programs, internship programs and short-term visits.</li>
          <li>Joint any other academic activities for benefit of both parties.</li>
        </ul>
      </section>
      
      <section class="industry-section">
        <h2>Industry Collaboration</h2>
        <p>
          At Dhanalakshmi Srinivasan University (DSU), fostering dynamic partnerships between academia and industry stands as a cornerstone in driving innovation and meeting real-world challenges. Through strategic collaboration initiatives, DSU aims to bridge the gap between academic expertise and industry demands, paving the way for impactful research and innovation.
        </p>
        <p>
          DSU's proactive approach towards industry collaboration involves forging alliances with diverse sectors, ranging from technology, agriculture, and manufacturing to healthcare and beyond. These collaborations are designed to facilitate knowledge exchange, joint research ventures, and the co-development of cutting-edge technologies that address contemporary industry challenges.
        </p>
        <p>
          DSU's industry collaboration initiatives are not only focused on research and development but also extend to curriculum design, ensuring that educational programs remain relevant and responsive to industry needs. This alignment helps produce industry-ready graduates equipped with the latest skills and knowledge necessary to thrive in the professional landscape.
        </p>
        <p>
          Moreover, DSU offers a platform for industry partners to engage with the academic community through seminars, workshops, and conferences, fostering a vibrant ecosystem for continuous dialogue and collaboration.
        </p>
        <p>
          As DSU continues to strengthen its ties with industry leaders, the institution remains committed to cultivating a culture of innovation, entrepreneurship, and forward-thinking solutions that benefit society at large.
        </p>

        <h3>Existing Partnerships:</h3>
        <ul>
          <li>
            <strong>DSU & Insecticides (India) Limited, Delhi</strong>
            The partnership promotes Industry-Academia collaboration in R&D, focusing on the project "Development of Eco-friendly Biocides" aligned with multiple UN SDGs including Zero Hunger, Good Health, and Responsible Consumption.
          </li>
          <li>
            <strong>DSU & IBM</strong>
            This collaboration enhances teaching methodologies and research, giving students and faculty access to IBM’s technologies, joint projects, and curriculum development.
          </li>
          <li>
            <strong>DSU & L&T EduTech</strong>
            A forward-thinking alliance focused on emerging technologies like AI, IoT, and data analytics through joint research and industry-aligned programs.
          </li>
          <li>
            <strong>DSU & PMC Global Systems Pvt. Ltd., Chennai</strong>
            An industrial partnership for technology and knowledge transfer in the field of Internet of Things (IoT).
          </li>
          <li>
            <strong>DSU & Dlithe Consultancy Services Pvt. Ltd, Bengaluru</strong>
            A collaboration for extracurricular activities in AI, ML, cybersecurity, and hackathon preparation.
          </li>
          <li>
            <strong>DSU & Plasmaart Resto Pvt. Ltd., Trichy</strong>
            A research-focused alliance exploring cell/gene therapy and tissue regeneration.
          </li>
        </ul>
      </section>
      <div class="center_dsu-cal">
          <section class="calendar-section">
            <h2>Futher details about center for research</h2>
            <iframe src="https://www.dsuniversity.ac.in/dsu-research-development-cell.php" width="100%" height="600px" style="border: 1px solid #ccc; margin-top: 20px;">
              Your browser does not support iframes. <a href="https://www.dsuniversity.ac.in/dsu-research-development-cell.php"></a>
            </iframe>
          </section>
        </div>

         
        </body>
        </html>
      `);
        newPage.document.close();
    };
});


const mou = ["dsu-mou"];

mou.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        newPage.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>MOU</title>
          <style>
             body {
      font-family: 'Segoe UI', sans-serif;
      margin: 0;
      padding: 0;
      background: #FFF5F2;
    }

    .mou-section {
      max-width: 1000px;
      margin: 40px auto;
      padding: 30px;
      animation: fadeIn 0.8s ease forwards;
      opacity: 0;
    }

    .mou-section h2 {
      font-size: 2rem;
      color: #2c3e50;
      margin-bottom: 20px;
      text-align: center;
    }

    .mou-section p {
      font-size: 1rem;
      line-height: 1.6;
      color: #444;
      text-align: justify;
      margin-bottom: 20px;
    }

    .mou-section ul {
      list-style-type: disc;
      padding-left: 20px;
      margin-bottom: 30px;
    }

    .mou-section ul li {
      margin-bottom: 10px;
      font-size: 1rem;
      color: #333;
    }

    .mou-section h3 {
      font-size: 1.3rem;
      color: #1a5276;
      margin-top: 30px;
      margin-bottom: 10px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
    }

    table th, table td {
      border: 1px solid #ccc;
      padding: 10px;
      text-align: left;
      font-size: 0.95rem;
    }

    table th {
      background-color: #f0f0f0;
      color: #333;
    }

    .gallery {
      margin-top: 40px;
    }

    .gallery h3 {
      font-size: 1.3rem;
      color: #2c3e50;
      margin-bottom: 20px;
      text-align: center;
    }

    .gallery-images {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
    }

    .gallery-images img {
      width: 180px;
      height: 120px;
      object-fit: cover;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
    }

    .gallery-images img:hover {
      transform: scale(1.05);
    }

    @keyframes fadeIn {
      from {
        transform: translateY(20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    @media (max-width: 600px) {
      .mou-section {
        padding: 20px;
      }

      table th, table td {
        font-size: 0.85rem;
      }

      .gallery-images img {
        width: 100%;
        height: auto;
      }
    }
     .center_dsu-cal{
        display:flex;
        justify-content:center;
       align-items:center;
    }
    .calendar-section {
        
      text-align: center;
      padding: 40px 20px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 6px 12px rgba(0,0,0,0.1);
      animation: fadeIn 0.8s ease forwards;
      opacity: 0;
    }

    .calendar-section h2 {
      font-size: 2rem;
      margin-bottom: 20px;
      color: #2c3e50;
    }
    .calendar-section a {
      display: inline-block;
      padding: 12px 24px;
      font-size: 1rem;
      color: white;
      background-color: #0077cc;
      border-radius: 8px;
      text-decoration: none;
      transition: background-color 0.3s ease, transform 0.3s ease;
    }

    .calendar-section a:hover {
      background-color: #005fa3;
      transform: scale(1.05);
    }

    @keyframes fadeIn {
      from {
        transform: translateY(20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
    @media (max-width: 600px) {
      .calendar-section {
        width: 90%;
      }
    }

    @media (min-width: 601px) and (max-width: 1024px) {
      .calendar-section {
        width: 60%;
      }
    }

    @media (min-width: 1025px) {
      .calendar-section {
        width: 40%;
      }
          </style>
        </head>
        <body>
          <section class="mou-section">
        <h2>MoU</h2>
        <p>
          To support the research team and faculty members of DSU, academic and industrial partnership is important for DSU. Memorandum of Understanding is one of the key aspects through which the partnership between the institutions is legally bound, for mutual benefits.
        </p>
        <p>
          DSU signed MoU with industrial partners to enrich the knowledge of students in line with the requirements of industry and to make the students ready for employment. The companies/industries with which DSU signed MoU are as follows:
        </p>
        <ul>
          <li><strong>IBM</strong> – Career Education Programme for B.Tech (Joint Certificate Programme in CSE with AI & Data Science and Cyber Security).</li>
          <li><strong>PMC Global Systems Pvt. Ltd., Chennai</strong> – An IoT-based company for technology and knowledge transfer.</li>
          <li><strong>Dlithe Consultancy Services Pvt. Ltd., Bengaluru</strong> – For value-added extracurricular activities in artificial intelligence.</li>
          <li><strong>Plasmaart Resto Pvt. Ltd., Trichy</strong> – Research in cell/gene therapy and tissue regeneration.</li>
          <li><strong>PMCGS Pvt. Ltd., Chennai</strong> – Activities for faculty and students in IoT-based knowledge transfer.</li>
        </ul>
        <p>
          DSU has also signed MoUs with academic institutions at national and international levels:
        </p>
        <ul>
          <li><strong>National Institute of Technology, Trichy</strong> – Skill development and training with Centre of Excellence in Manufacturing.</li>
          <li><strong>Kadiri University, Indonesia</strong> – Interdisciplinary research, student/faculty exchange, dual degree programs, internships, and skill development training.</li>
        </ul>

        <h3>MoU Details</h3>
        <table>
          <thead>
            <tr>
              <th>S. No.</th>
              <th>Particulars</th>
              <th>Date of MoU</th>
              <th>MoU Partner</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Curriculum Collaborator</td>
              <td>27.12.2023</td>
              <td>INTEL (USA), NEC (Japan)</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Teaching, Training, and Research Collaborators</td>
              <td>12.02.2024</td>
              <td>NITTTR, Chennai</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Global Academic Collaborators</td>
              <td>19.02.2024<br>06.03.2024</td>
              <td>Dongguk University, South Korea<br>Tunku Abdul Rahman University of Management and Technology, Malaysia</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Technical Collaborators</td>
              <td>02.02.2024</td>
              <td>Ashok Leyland</td>
            </tr>
          </tbody>
        </table>

        <div class="gallery">
          <h3>MoU Highlights</h3>
          <div class="gallery-images">
            <img src="https://res.cloudinary.com/daom3xsqm/image/upload/v1754590448/Proud_Moment_for_DSU_HRDC_of_Dhanalakshmi_Srinivasan_University_Trichy_has_officially_si_znbhze.jpg" alt="MoU Image 1">
            <img src="https://res.cloudinary.com/daom3xsqm/image/upload/v1754590401/Proud_Moment_for_DSU_HRDC_of_Dhanalakshmi_Srinivasan_University_Trichy_has_officially_si_2_gpw8ow.jpg" alt="MoU Image 2">
            <img src="https://res.cloudinary.com/daom3xsqm/image/upload/v1754590376/Proud_Moment_for_DSU_HRDC_of_Dhanalakshmi_Srinivasan_University_Trichy_has_officially_si_1_nhehny.jpg" alt="MoU Image 3">
            <img src="https://res.cloudinary.com/daom3xsqm/image/upload/v1754590322/Exciting_News_from_Dhanalakshmi_Srinivasan_University_We_re_thrilled_to_share_that_the_H_m5g6mu.jpg" alt="MoU Image 4">
            <img src="https://res.cloudinary.com/daom3xsqm/image/upload/v1754590291/Exciting_News_from_Dhanalakshmi_Srinivasan_University_We_re_thrilled_to_share_that_the_H_5_wqd65x.jpg" alt="MoU Image 5">
          </div>
        </div>
      </section>
      <div class="center_dsu-cal">
          <section class="calendar-section">
            <h2>Futher details about MoU</h2>
            <iframe src="https://www.dsuniversity.ac.in/dsu-mou.php" width="100%" height="600px" style="border: 1px solid #ccc; margin-top: 20px;">
              Your browser does not support iframes. <a href="https://www.dsuniversity.ac.in/dsu-mou.php"></a>
            </iframe>
          </section>
        </div>
         
        </body>
        </html>
      `);
        newPage.document.close();
    };
});

const life = ["dsu-life"];

life.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        newPage.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>LIFE</title>
          <style>
            body {
      font-family: 'Segoe UI', sans-serif;
      margin: 0;
      padding: 0;
      background: #E1E9C9;
    }

    .student-section {
      max-width: 1000px;
      margin: 40px auto;
      padding: 30px;
      animation: fadeIn 0.8s ease forwards;
      opacity: 0;
    }

    .student-section h2 {
      font-size: 2rem;
      color: #2c3e50;
      margin-bottom: 20px;
      text-align: center;
    }

    .student-section h3 {
      font-size: 1.3rem;
      color: #1a5276;
      margin-top: 30px;
      margin-bottom: 10px;
    }

    .student-section p {
      font-size: 1rem;
      line-height: 1.6;
      color: #444;
      text-align: justify;
      margin-bottom: 20px;
    }

    .student-section ul {
      list-style-type: disc;
      padding-left: 20px;
      margin-bottom: 20px;
    }

    .student-section ul li {
      margin-bottom: 8px;
      font-size: 1rem;
      color: #333;
    }

    @keyframes fadeIn {
      from {
        transform: translateY(20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    @media (max-width: 600px) {
      .student-section {
        padding: 20px;
      }
    }
     .center_dsu-cal{
        display:flex;
        justify-content:center;
       align-items:center;
    }
    .calendar-section {
        
      text-align: center;
      padding: 40px 20px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 6px 12px rgba(0,0,0,0.1);
      animation: fadeIn 0.8s ease forwards;
      opacity: 0;
    }

    .calendar-section h2 {
      font-size: 2rem;
      margin-bottom: 20px;
      color: #2c3e50;
    }
    .calendar-section a {
      display: inline-block;
      padding: 12px 24px;
      font-size: 1rem;
      color: white;
      background-color: #0077cc;
      border-radius: 8px;
      text-decoration: none;
      transition: background-color 0.3s ease, transform 0.3s ease;
    }

    .calendar-section a:hover {
      background-color: #005fa3;
      transform: scale(1.05);
    }

    @keyframes fadeIn {
      from {
        transform: translateY(20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
    @media (max-width: 600px) {
      .calendar-section {
        width: 90%;
      }
    }

    @media (min-width: 601px) and (max-width: 1024px) {
      .calendar-section {
        width: 60%;
      }
    }

    @media (min-width: 1025px) {
      .calendar-section {
        width: 40%;
      }
          </style>
        </head>
        <body>
           <section class="student-section">
        <h2>Division of Students' Affairs</h2>
        <p>
          The Division of Students' Affairs at Dhanalakshmi Srinivasan University (DSU) is the heartbeat of campus life, dedicated to nurturing a vibrant, inclusive, and dynamic student community. This division goes beyond academics, ensuring that every student enjoys a holistic university experience by providing unwavering support in welfare, career development, and extracurricular engagement.
        </p>
        <p>
          From grievance redressal and counseling services to leadership opportunities and professional skill-building, the division empowers students to thrive in all aspects of life. A diverse range of student-led clubs—including the Science Club, Fine Arts Club, Music Club, Photography Club, and Environmental Club—fosters creativity, innovation, and personal expression.
        </p>
        <p>
          The university actively promotes student leadership through the Student Council and cultural festivals while maintaining a strong focus on ethics, discipline, and a safe learning environment through committees like the Anti-Ragging and Grievance Redressal Committees. Beyond academics, the division ensures a comfortable and enriching campus experience with well-managed hostel facilities, transportation services, and recreational activities. With a commitment to shaping well-rounded individuals.
        </p>

        <h3 style="text-align:center;">DSU Hostel</h3>
        <h3>About Hostel</h3>
        <p>
          Dhanalakshmi Srinivasan University - Trichy Campus facilitates separate hostels for boys and girls with good infrastructure. The aesthetically designed modern hostels provide a home atmosphere. All rooms are spacious and furnished with adequate facilities. Both vegetarian and non-vegetarian foods are provided hygienically, including separate meals for Andhra, Kerala, and North-Indian students. Medical service is available 24/7.
        </p>

        <h3>Rules and Regulations for Hostellers</h3>
        <p><strong>Allotment of Rooms</strong></p>
        <ul>
          <li>Rooms are allotted by Deputy Wardens under the Warden’s orders.</li>
          <li>Fixed number of students per room; no room changes allowed.</li>
          <li>Attendance in classes is mandatory; staying in hostel during class hours requires written permission.</li>
          <li>Unauthorized presence in hostel during class hours leads to disciplinary action.</li>
          <li>Room exchanges and unauthorized guests are strictly prohibited.</li>
        </ul>

        <p><strong>Maintaining Discipline</strong></p>
        <ul>
          <li>Outing allowed once a week with prior permission and proper sign-in/out.</li>
          <li>Damage to property incurs fines and disciplinary action.</li>
          <li>Cleanliness of rooms, toilets, and common areas is mandatory.</li>
          <li>Electricity conservation is expected.</li>
          <li>Guests are not allowed in rooms; misuse of devices leads to expulsion.</li>
          <li>Functions or meetings require prior approval.</li>
          <li>Noise, posters, and unsafe storage are prohibited.</li>
          <li>Vehicle parking is not allowed inside hostel premises.</li>
          <li>Sick students must inform Deputy Warden immediately.</li>
          <li>Roll call and mess alerts are practiced regularly.</li>
        </ul>

        <p><strong>Prohibited Practices</strong></p>
        <ul>
          <li>Smoking, alcohol, drugs are strictly banned.</li>
          <li>Only approved visitors allowed; firearms and extra electrical fittings are prohibited.</li>
          <li>Food must be consumed in dining hall only; no sharing of plates.</li>
          <li>Outside food requires prior intimation; mess menu may vary.</li>
          <li>Ragging, noise, and indoor games in corridors are not permitted.</li>
        </ul>

        <p><strong>General Rule</strong></p>
        <ul>
          <li>Grievances must be reported to Hostel Warden.</li>
        </ul>

        <p><strong>Dress Code</strong></p>
        <ul>
          <li>Decent dress code required, especially in dining hall.</li>
        </ul>

        <p><strong>Note:</strong></p>
        <ul>
          <li>Food must be eaten in dining hall; no food after 9:00 p.m. from outside.</li>
          <li>Security may inspect food; violations are serious.</li>
          <li>Menu may change based on stock availability.</li>
          <li>Mess time must be strictly followed.</li>
        </ul>

        <h3>Hostel Facilities</h3>
        <ul>
          <li>Wi-Fi enabled, aesthetic architecture</li>
          <li>Internet speed up to 300 Mbps</li>
          <li>Dedicated study room after college hours</li>
          <li>Uninterrupted power supply with backup generator</li>
          <li>Banking facility with ATM</li>
          <li>Five modern hostels with homely ambience</li>
          <li>24/7 medical facility with free medicines</li>
          <li>Medical lab facility</li>
          <li>Mineral water in all rooms</li>
          <li>Nutritious Veg & Non-Veg food in modern dining hall</li>
          <li>Separate food for other-state students</li>
          <li>Fitness centre and yoga sessions</li>
          <li>Special security arrangements</li>
          <li>Stationery shop</li>
        </ul>

        <h3>Scholarship</h3>
        <p>
          Dhanalakshmi Srinivasan University doctoral fellowship (DSU-Doctoral Fellowship) shall be awarded to meritorious full-time research scholars based on selection committee recommendation and Dean approval. A stipend of ₹20,000/month and a contingency grant of ₹50,000/year will be provided. The fellowship lasts for 2 years and may extend for another year based on research progress. Candidates are encouraged to secure external funding (JRF/SRF from UGC, CSIR, etc.). Selection is based on entrance exam and interview.
        </p>
      </section>
      
       <div class="center_dsu-cal">
          <section class="calendar-section">
            <h2>Futher details about student life</h2>
            <iframe src="https://www.dsuniversity.ac.in/Students-Affairs.php" width="100%" height="600px" style="border: 1px solid #ccc; margin-top: 20px;">
              Your browser does not support iframes. <a href="https://www.dsuniversity.ac.in/Students-Affairs.php"></a>
            </iframe>
          </section>
        </div>
         
        </body>
        </html>
      `);
        newPage.document.close();
    };
});


const place = ["dsu-place"];

place.forEach(id => {
    const modren = document.getElementById(id);


    modren.onclick = () => {
        const newPage = window.open("", "_blank");

        newPage.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Placement</title>
          <style>
            body {
      font-family: 'Segoe UI', sans-serif;
      margin: 0;
      padding: 0;
      background: #F7F4EA;
    }

    .hrdf-section {
      max-width: 1000px;
      margin: 40px auto;
      padding: 30px;
      animation: fadeIn 0.8s ease forwards;
      opacity: 0;
    }

    .hrdf-section h2 {
      font-size: 2rem;
      color: #2c3e50;
      margin-bottom: 20px;
      text-align: center;
    }

    .hrdf-section h3 {
      font-size: 1.3rem;
      color: #1a5276;
      margin-top: 30px;
      margin-bottom: 10px;
    }

    .hrdf-section p {
      font-size: 1rem;
      line-height: 1.6;
      color: #444;
      text-align: justify;
      margin-bottom: 20px;
    }

    .hrdf-section ul {
      list-style-type: disc;
      padding-left: 20px;
      margin-bottom: 20px;
    }

    .hrdf-section ul li {
      margin-bottom: 8px;
      font-size: 1rem;
      color: #333;
    }

    .gallery {
      margin-top: 40px;
    }

    .gallery h3 {
      font-size: 1.3rem;
      color: #2c3e50;
      margin-bottom: 20px;
      text-align: center;
    }

    .gallery-images {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
    }

    .gallery-images img {
      width: 180px;
      height: 120px;
      object-fit: cover;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
    }

    .gallery-images img:hover {
      transform: scale(1.05);
    }

    @keyframes fadeIn {
      from {
        transform: translateY(20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    @media (max-width: 600px) {
      .hrdf-section {
        padding: 20px;
      }

      .gallery-images img {
        width: 100%;
        height: auto;
      }
    }
    .center_dsu-cal{
        display:flex;
        justify-content:center;
       align-items:center;
    }
    .calendar-section {
        
      text-align: center;
      padding: 40px 20px;
      background: white;
      border-radius: 12px;
      box-shadow: 0 6px 12px rgba(0,0,0,0.1);
      animation: fadeIn 0.8s ease forwards;
      opacity: 0;
    }

    .calendar-section h2 {
      font-size: 2rem;
      margin-bottom: 20px;
      color: #2c3e50;
    }
    .calendar-section a {
      display: inline-block;
      padding: 12px 24px;
      font-size: 1rem;
      color: white;
      background-color: #0077cc;
      border-radius: 8px;
      text-decoration: none;
      transition: background-color 0.3s ease, transform 0.3s ease;
    }

    .calendar-section a:hover {
      background-color: #005fa3;
      transform: scale(1.05);
    }

    @keyframes fadeIn {
      from {
        transform: translateY(20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
    @media (max-width: 600px) {
      .calendar-section {
        width: 90%;
      }
    }

    @media (min-width: 601px) and (max-width: 1024px) {
      .calendar-section {
        width: 60%;
      }
    }

    @media (min-width: 1025px) {
      .calendar-section {
        width: 40%;
      }
          </style>
        </head>
        <body>
           <section class="hrdf-section">
        <h2>HRDC</h2>
        <h3>About Human Resource Development Centre (HRDC)</h3>
        <p>
          Human Resource Development Centre (HRDC) aims to provide competent training and maintain cordial relationships with Industries and Corporates to place them in respectable positions.
        </p>
        <p>The activities of HRDC include:</p>
        <ul>
          <li>Training (Soft Skills, Interview Skills & Aptitude)</li>
          <li>Planning and Organizing Placements</li>
          <li>Memorandum of Understanding</li>
          <li>Industry Speaks</li>
          <li>About HRDC</li>
          <li>Vision & Mission</li>
          <li>Objectives</li>
          <li>Training & Placement Cell</li>
          <li>Entrepreneur Development Cell</li>
        </ul>

        <h3>Vision</h3>
        <p>To become an epicenter of expertise in caliber the students towards creating them as renowned professionals, Tycoons of the world and to transform them to be employable.</p>

        <h3>Mission</h3>
        <ul>
          <li>To transmit constant training for students in Technical and Skill Development.</li>
          <li>To streamline the Industry-related training analogous to trending pipelines.</li>
          <li>To provide a platform for the students to get their initial job / to make them strong Entrepreneurs.</li>
        </ul>

        <h3>Objectives</h3>
        <ul>
          <li>Organize on-campus & off-campus Placements.</li>
          <li>Training students in specialized areas as per Industry Expectations.</li>
          <li>Enhance Personality Development and communication.</li>
          <li>Creating healthy Industry - Institute interaction by signing MOUs.</li>
          <li>Moulding students readily employable and deployable.</li>
          <li>Imparting knowledge of latest Computer oriented programs / Design.</li>
        </ul>

        <h3>Training & Placement Cell</h3>
        <p>
          Training and Placement Cell specializes in helping students to develop their skills and it functions to ensure the best placements for the students graduating from DSU. It organizes events and programs that expose students to the real world of work and conducts Webinars, Seminars, Workshops, and Guest Lectures regularly.
        </p>
        <p>
          The Cell arranges In-house Training, Internships, and In-plant training with corporate organizations. Students are trained on Basic English, Quantitative Aptitude, Soft skills, and Technical skills from 2nd Year onwards. Training topics and methods are chosen collaboratively with industry and academic experts.
        </p>
        <p>
          DSU motivates students to pursue certification programs and provides infrastructure, labs, and expert interaction. If you want a great career in your dream organization, be a part of DSU today!
        </p>

        <h3>Career Guidance Cell</h3>
        <p>
          Career and Counseling Cell bridges the gap between student skills and industry expectations. It helps students select careers based on their strengths and interests, and hosts workshops on Personality Development, Communication, and Presentation Skills.
        </p>
        <p>
          Eminent speakers from various fields are invited to guide students. The support offered makes students confident and well-prepared for their chosen career paths.
        </p>

        <div class="gallery">
          <h3>HRDC Faculty</h3>
          <div class="gallery-images">
            <img src="https://res.cloudinary.com/dmlnjx6ga/image/upload/v1757360245/Dr-B-Vidya_n1vdgb.jpg" alt="HRDC Image 1">
            <img src="https://res.cloudinary.com/dmlnjx6ga/image/upload/v1757360252/Dr_R_Karthick-Babu_kases9.jpg" alt="HRDC Image 2">
            <img src="https://res.cloudinary.com/dmlnjx6ga/image/upload/v1757360259/grija-hrdc_nvjnev.jpg" alt="HRDC Image 3">
            <img src="https://res.cloudinary.com/dmlnjx6ga/image/upload/v1757360230/Mr__V__Venkadesh_i7plsm.jpg" alt="HRDC Image 4">
            <img src="https://res.cloudinary.com/dmlnjx6ga/image/upload/v1757360238/Ms__K__Rajashree1_tdwfwm.jpg" alt="HRDC Image 5">
            <img src="https://res.cloudinary.com/dmlnjx6ga/image/upload/v1757360369/James-Anto_uftjif.jpg" alt="HRDC Image 6">
            <img src="https://res.cloudinary.com/dmlnjx6ga/image/upload/v1757360377/Mrs_M_LAVANYA_eerg1f.jpg" alt="HRDC Image 7">
          </div>
        </div>
      </section>
      
      <div class="center_dsu-cal">
          <section class="calendar-section">
            <h2>Futher details about Placements</h2>
            <iframe src="https://www.dsuniversity.ac.in/hrdc.php" width="100%" height="600px" style="border: 1px solid #ccc; margin-top: 20px;">
              Your browser does not support iframes. <a href="https://www.dsuniversity.ac.in/hrdc.php"></a>
            </iframe>
          </section>
        </div>
         
        </body>
        </html>
      `);
        newPage.document.close();
    };
});