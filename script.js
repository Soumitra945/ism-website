document.addEventListener('DOMContentLoaded', () => {
    const navContainer = document.getElementById('module-nav');
    const welcomeScreen = document.getElementById('welcome-screen');
    const moduleView = document.getElementById('module-view');
    const mockView = document.getElementById('mock-view');
    const moduleTitle = document.getElementById('module-title');
    const moduleMarks = document.getElementById('module-marks');
    const notesContent = document.getElementById('notes-content');
    const questionsContainer = document.getElementById('questions-container');
    const mockContainer = document.getElementById('mock-container');
    const mockExamBtn = document.getElementById('mock-exam-btn');
    const pyqView = document.getElementById('pyq-view');
    const pyqContainer = document.getElementById('pyq-container');
    const pyqBtn = document.getElementById('pyq-btn');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    // Initialize Navigation
    ismData.forEach((mod, index) => {
        const btn = document.createElement('button');
        btn.className = 'nav-btn';
        btn.innerHTML = `
            <span class="mod-num">${mod.id}</span>
            <span class="mod-name">${mod.title}</span>
        `;
        
        btn.addEventListener('click', () => {
            // Remove active class from all nav buttons
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            loadModule(mod);
        });

        navContainer.appendChild(btn);
    });

    // Mock Exam Button Logic
    if (mockExamBtn) {
        mockExamBtn.addEventListener('click', () => {
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            mockExamBtn.classList.add('active');
            loadMockExams();
        });
    }

    // PYQ Button Logic
    if (pyqBtn) {
        pyqBtn.addEventListener('click', () => {
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            pyqBtn.classList.add('active');
            loadPYQ();
        });
    }

    // Tab Switching Logic
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all tabs
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.add('hidden'));

            // Add active class to clicked tab
            btn.classList.add('active');
            const targetId = btn.getAttribute('data-target');
            document.getElementById(targetId).classList.remove('hidden');
        });
    });

    function loadModule(moduleData) {
        welcomeScreen.classList.add('hidden');
        if(mockView) mockView.classList.add('hidden');
        if(pyqView) pyqView.classList.add('hidden');
        moduleView.classList.remove('hidden');

        // Reset to first tab
        tabBtns[0].click();

        // Populate Header
        moduleTitle.textContent = moduleData.title;
        moduleMarks.textContent = `${moduleData.marks} Marks Area`;
        
        if (moduleData.marks === 10) {
            moduleMarks.className = 'marks-badge badge-10m';
        } else {
            moduleMarks.className = 'marks-badge badge-40m';
        }

        // Populate Notes
        notesContent.innerHTML = moduleData.notes;

        // Populate Questions
        questionsContainer.innerHTML = '';
        moduleData.questions.forEach((qObj, idx) => {
            const qDiv = document.createElement('div');
            qDiv.className = 'question-item';
            
            qDiv.innerHTML = `
                <div class="question-text">Q${idx + 1}. ${qObj.q}</div>
                <button class="show-answer-btn" onclick="toggleAnswer(this)">
                    <ion-icon name="eye-outline"></ion-icon> Show Answer
                </button>
                <div class="answer-box hidden">${qObj.a}</div>
            `;
            
            questionsContainer.appendChild(qDiv);
        });
    }

    function loadMockExams() {
        welcomeScreen.classList.add('hidden');
        moduleView.classList.add('hidden');
        if(pyqView) pyqView.classList.add('hidden');
        if(mockView) mockView.classList.remove('hidden');
        
        mockContainer.innerHTML = '';

        // Generate 2 Mock Sets
        for(let setNum = 1; setNum <= 2; setNum++) {
            const setDiv = document.createElement('div');
            setDiv.style.marginBottom = '40px';
            setDiv.innerHTML = `<h3 style="color: var(--accent-blue); border-bottom: 1px solid var(--glass-border); padding-bottom: 10px; margin-bottom: 20px;">Mock Exam Set ${setNum}</h3>`;
            
            // Section A: 10 Marks (Modules 1-3)
            setDiv.innerHTML += `<h4 style="color: var(--text-secondary); margin-bottom: 15px;">Section A (10 Marks) - Answer any two (5 Marks each)</h4>`;
            
            // Get random questions from mod 1-3
            const secA_Pool = [];
            for(let i=0; i<3; i++) secA_Pool.push(...ismData[i].questions);
            const secA_Questions = getRandomQuestions(secA_Pool, 3); // Provide 3, answer any 2
            
            secA_Questions.forEach((qObj, idx) => {
                setDiv.innerHTML += `
                    <div class="question-item">
                        <div class="question-text">Q${idx + 1}. ${qObj.q} <span style="float:right; color:var(--text-secondary); font-size: 12px;">[5 Marks]</span></div>
                        <button class="show-answer-btn" onclick="toggleAnswer(this)">
                            <ion-icon name="eye-outline"></ion-icon> Show Answer
                        </button>
                        <div class="answer-box hidden">${qObj.a}</div>
                    </div>
                `;
            });

            // Section B: 40 Marks (Modules 4-6)
            setDiv.innerHTML += `<h4 style="color: var(--text-secondary); margin-top: 30px; margin-bottom: 15px;">Section B (40 Marks) - Answer any four (10 Marks each)</h4>`;
            
            const secB_Pool = [];
            for(let i=3; i<6; i++) secB_Pool.push(...ismData[i].questions);
            const secB_Questions = getRandomQuestions(secB_Pool, 5); // Provide 5, answer any 4
            
            secB_Questions.forEach((qObj, idx) => {
                setDiv.innerHTML += `
                    <div class="question-item">
                        <div class="question-text">Q${idx + 4}. ${qObj.q} <span style="float:right; color:var(--text-secondary); font-size: 12px;">[10 Marks]</span></div>
                        <button class="show-answer-btn" onclick="toggleAnswer(this)">
                            <ion-icon name="eye-outline"></ion-icon> Show Answer
                        </button>
                        <div class="answer-box hidden">${qObj.a}</div>
                    </div>
                `;
            });

            mockContainer.appendChild(setDiv);
        }
    }

    function loadPYQ() {
        welcomeScreen.classList.add('hidden');
        moduleView.classList.add('hidden');
        if(mockView) mockView.classList.add('hidden');
        if(pyqView) pyqView.classList.remove('hidden');
        
        pyqContainer.innerHTML = '';

        if (typeof modelPaper2024 !== 'undefined') {
            modelPaper2024.forEach((sectionData) => {
                const sectionDiv = document.createElement('div');
                sectionDiv.style.marginBottom = '40px';
                sectionDiv.innerHTML = `<h3 style="color: var(--accent-blue); border-bottom: 1px solid var(--glass-border); padding-bottom: 10px; margin-bottom: 20px;">${sectionData.section}</h3>`;
                
                sectionData.questions.forEach((qObj) => {
                    sectionDiv.innerHTML += `
                        <div class="question-item">
                            <div class="question-text">${qObj.q} <span style="float:right; color:var(--text-secondary); font-size: 12px;">[${qObj.marks} Marks | ${qObj.co}]</span></div>
                            <button class="show-answer-btn" onclick="toggleAnswer(this)">
                                <ion-icon name="eye-outline"></ion-icon> Show Answer
                            </button>
                            <div class="answer-box hidden">${qObj.a}</div>
                        </div>
                    `;
                });
                pyqContainer.appendChild(sectionDiv);
            });
        }
    }

    // Helper function to pick random items from array
    function getRandomQuestions(arr, num) {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    }
});

// Global function to toggle answer visibility
window.toggleAnswer = function(btn) {
    const answerBox = btn.nextElementSibling;
    if (answerBox.classList.contains('hidden')) {
        answerBox.classList.remove('hidden');
        btn.innerHTML = '<ion-icon name="eye-off-outline"></ion-icon> Hide Answer';
        btn.style.background = 'rgba(255,255,255,0.1)';
        btn.style.color = 'var(--text-secondary)';
    } else {
        answerBox.classList.add('hidden');
        btn.innerHTML = '<ion-icon name="eye-outline"></ion-icon> Show Answer';
        btn.style.background = 'var(--accent-gradient)';
        btn.style.color = 'white';
    }
};
