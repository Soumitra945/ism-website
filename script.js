const ismData = [
    {
        id: 1,
        title: "I. Introduction to information storage and Data center",
        marks: 10,
        notes: `
            <h4>1. Information Storage</h4>
            <p>Data refers to raw facts, while Information is processed data that has value. The evolution of storage technology moved from centralized mainframe storage to decentralized open systems, and now to distributed and cloud-based storage architectures.</p>
            
            <h4>2. Data Center Infrastructure</h4>
            <p>A Data Center is a facility used to house computer systems and associated components. Five core elements include:</p>
            <ul>
                <li><strong>Application:</strong> A computer program that provides logic for computing operations.</li>
                <li><strong>DBMS:</strong> Database Management System for organizing data.</li>
                <li><strong>Host/Compute:</strong> Servers that run applications and DBMS.</li>
                <li><strong>Network:</strong> Data path that facilitates communication between clients, hosts, and storage.</li>
                <li><strong>Storage:</strong> A device that stores data persistently.</li>
            </ul>

            <h4>3. Key Challenges</h4>
            <p>Managing information involves dealing with exponential data growth, ensuring data availability, performance optimization, and securing data against breaches.</p>

            <h4>4. Information Lifecycle Management (ILM)</h4>
            <p>ILM is a proactive strategy that enables an IT organization to manage data from the moment it is created until it is destroyed. It aligns the business value of information with the most appropriate and cost-effective IT infrastructure.</p>
        `,
        questions: [
            {
                q: "What are the five core elements of a Data Center Infrastructure?",
                a: "The five core elements are: Application, Database Management System (DBMS), Host or Compute (servers), Network (data path), and Storage (persistent storage devices)."
            },
            {
                q: "Define Information Lifecycle Management (ILM) and its significance.",
                a: "ILM is a proactive strategy for managing data throughout its lifecycle, from creation to disposal. It is significant because it aligns the business value of information with the most cost-effective IT infrastructure, ensuring optimal resource utilization."
            },
            {
                q: "What is the difference between structured and unstructured data?",
                a: "Structured data can be organized in rows and columns (like a relational database), whereas unstructured data lacks a specific format or structure (e.g., text documents, images, videos)."
            },
            {
                q: "What is 'Big Data' and what are its core characteristics?",
                a: "Big Data refers to datasets whose size is beyond the ability of typical database software tools to capture, store, manage, and analyze. Its core characteristics are the 'Three Vs': Volume (massive size), Velocity (high speed of generation), and Variety (various formats and structures)."
            },
            {
                q: "What are the key requirements for storage systems in a data center?",
                a: "Key requirements include High Availability (ensuring data is accessible when needed), Performance (fast I/O operations), Scalability (ability to grow without disruption), Security (protecting against unauthorized access), and Manageability."
            },
            {
                q: "Explain the role of a DBMS in an information storage environment.",
                a: "A Database Management System (DBMS) controls the creation, maintenance, and use of a database. It acts as an interface between the application and the data, managing data consistency, security, and integrity."
            },
            {
                q: "What is a Service Level Agreement (SLA)?",
                a: "An SLA is a formal contract between a service provider and a client that specifies, usually in measurable terms, what services the provider will furnish. In storage, SLAs often define uptime, performance metrics, and recovery times."
            }
        ]
    },
    {
        id: 2,
        title: "II. Data Protection: RAID, Intelligent Storage System",
        marks: 10,
        notes: `
            <h4>1. Data Organization</h4>
            <ul>
                <li><strong>Block-level:</strong> Data is stored in raw volumes (blocks), typically used in SAN.</li>
                <li><strong>File-level:</strong> Data is stored as files and directories, typically used in NAS.</li>
                <li><strong>Object-level:</strong> Data is bundled with metadata and a unique identifier, used in cloud storage.</li>
            </ul>

            <h4>2. RAID Systems</h4>
            <p>Redundant Array of Independent Disks (RAID) combines multiple disk drives into a logical unit to improve performance, reliability, or both.</p>
            <ul>
                <li><strong>RAID 0 (Striping):</strong> High performance, no fault tolerance.</li>
                <li><strong>RAID 1 (Mirroring):</strong> High fault tolerance, 50% capacity overhead.</li>
                <li><strong>RAID 5 (Striping with Parity):</strong> Good balance of performance and fault tolerance. Tolerates single disk failure.</li>
                <li><strong>RAID 6:</strong> Dual parity, tolerates two disk failures.</li>
            </ul>

            <h4>3. Intelligent Storage Systems (ISS)</h4>
            <p>ISS consists of a front-end, cache, back-end, and physical disks. It provides optimized I/O processing. Caching techniques like Prefetching read data into the cache ahead of time based on access patterns to reduce read latency.</p>
        `,
        questions: [
            {
                q: "Explain the working mechanism of RAID 5.",
                a: "RAID 5 uses block-level striping with distributed parity. Parity information is distributed across all drives in the array. If one drive fails, the data can be rebuilt using the surviving data and parity blocks. It requires a minimum of 3 drives."
            },
            {
                q: "What is the role of Cache in an Intelligent Storage System?",
                a: "Cache is semiconductor memory where data is placed temporarily to reduce the time required to service I/O requests from the host. It bridges the performance gap between the host and the slower mechanical disks."
            },
            {
                q: "What is Prefetching in storage caching?",
                a: "Prefetching (or Read-Ahead) is a caching algorithm where the storage system anticipates future data requests based on sequential access patterns and loads that data into cache before the host requests it, significantly improving read performance."
            },
            {
                q: "Compare RAID 1 and RAID 0.",
                a: "RAID 0 (Striping) distributes data across multiple disks for maximum performance but offers zero fault tolerance. If one disk fails, all data is lost. RAID 1 (Mirroring) copies the exact same data to two or more disks, offering high fault tolerance but taking a 50% capacity penalty."
            },
            {
                q: "What is the Write Penalty in RAID 5?",
                a: "The RAID 5 write penalty occurs because a single write request by the host requires 4 actual disk I/Os: reading the old data, reading the old parity, calculating the new parity, writing the new data, and writing the new parity."
            },
            {
                q: "Explain the concept of 'Hot Sparing' in an array.",
                a: "A hot spare is an idle, powered-on standby drive ready to take over immediately if a primary drive in a RAID group fails. The array controller automatically initiates the data rebuild process onto the hot spare without human intervention."
            },
            {
                q: "What are the primary components of an Intelligent Storage System?",
                a: "The core components are the Front-End (handles host connectivity), Cache (high-speed memory for bridging performance gaps), Back-End (manages disk connectivity), and the Physical Disks themselves."
            }
        ]
    },
    {
        id: 3,
        title: "III. Direct-Attached Storage, SCSI, SAN, NAS",
        marks: 10,
        notes: `
            <h4>1. Direct-Attached Storage (DAS)</h4>
            <p>Storage directly attached to a host server without a network in between. Simple and low cost, but suffers from isolated data islands and scalability issues.</p>

            <h4>2. Storage Area Network (SAN)</h4>
            <p>A high-speed, dedicated network that connects shared storage arrays to multiple servers. It uses block-level access.</p>
            <ul>
                <li><strong>Fibre Channel (FC):</strong> Traditional, high-performance SAN protocol.</li>
                <li><strong>IP-SAN (iSCSI):</strong> Encapsulates SCSI commands over IP networks. Cheaper as it uses existing Ethernet infrastructure.</li>
            </ul>

            <h4>3. Network Attached Storage (NAS)</h4>
            <p>An IP-based, dedicated, high-performance file sharing and storage device. NAS enables file-level access to data.</p>
            <ul>
                <li><strong>NFS (Network File System):</strong> Used primarily in UNIX/Linux environments.</li>
                <li><strong>CIFS (Common Internet File System) / SMB:</strong> Used primarily in Windows environments.</li>
            </ul>
        `,
        questions: [
            {
                q: "Differentiate between SAN and NAS.",
                a: "SAN (Storage Area Network) provides block-level data access, appears as local drives to the host, and typically uses Fibre Channel or iSCSI. NAS (Network Attached Storage) provides file-level access, appears as a shared network folder, and uses protocols like NFS or CIFS."
            },
            {
                q: "What is iSCSI and what are its advantages?",
                a: "iSCSI (Internet Small Computer System Interface) is an IP-based storage networking standard for linking data storage facilities. Its main advantage is that it allows SANs to be built over existing IP Ethernet networks, significantly reducing the cost compared to Fibre Channel."
            },
            {
                q: "List the limitations of Direct-Attached Storage (DAS).",
                a: "Limitations of DAS include poor scalability, isolated data islands (making sharing difficult), limited distance between host and storage, and underutilization of storage resources."
            },
            {
                q: "What is Fibre Channel Protocol (FCP)?",
                a: "FCP is the serial data transfer protocol used on Fibre Channel networks. It serves as the transport mechanism that encapsulates SCSI commands to enable block-level storage access over high-speed optical connections."
            },
            {
                q: "Name the components of a NAS head.",
                a: "A NAS head typically includes a CPU/Memory (for processing), Network Interfaces (to connect to the LAN), and Storage Interfaces (to connect to the backend disks or SAN). It runs an optimized operating system to serve files."
            },
            {
                q: "What is unified storage?",
                a: "Unified storage (or multiprotocol storage) is a single storage system that consolidates block-level (SAN) and file-level (NAS) access, often supporting FC, iSCSI, NFS, and CIFS simultaneously from the same hardware."
            },
            {
                q: "Explain DAFS.",
                a: "Direct Access File System (DAFS) is a high-performance file sharing protocol designed for tightly coupled clustered environments. It bypasses the operating system's networking stack to read and write directly into the memory of other machines, minimizing latency."
            }
        ]
    },
    {
        id: 4,
        title: "IV. Network components",
        marks: 40,
        notes: `
            <h4>1. Network Connectivity Components</h4>
            <p><strong>Switches:</strong> Used in SAN environments to intelligently route data between hosts and storage arrays based on FC addresses. They form the core of standard SAN fabrics.</p>
            <p><strong>Directors:</strong> Enterprise-class switches designed for maximum availability. They feature modular architectures, redundant internal components (power supplies, processors, cooling), and high port densities (hundreds of ports).</p>
            <p><strong>Host Bus Adapters (HBAs):</strong> Specialized expansion cards installed in servers that handle the protocol processing required for SAN connectivity, offloading this burden from the server CPU.</p>

            <h4>2. Connectivity Protocols & Architectures</h4>
            <p><strong>Fibre Channel (FC):</strong> The dominant protocol for enterprise SANs. It uses optical fibers (or copper) to transmit data at high speeds (up to 128Gbps in modern implementations) with zero frame loss, ensuring high reliability for block storage.</p>
            <p><strong>IP-SAN (iSCSI):</strong> Encapsulates SCSI commands into TCP/IP packets. This allows organizations to build SANs over existing Ethernet infrastructure, drastically reducing costs compared to Fibre Channel, while offering reasonable performance.</p>
            <p><strong>Fibre Channel over Ethernet (FCoE):</strong> Consolidates data network (IP) and storage network (FC) traffic onto a single, lossless 10GE (or faster) Ethernet network.</p>

            <h4>3. Advanced Networking</h4>
            <p><strong>Metro-Ethernet:</strong> High-speed MAN technology used extensively for remote replication, enabling disaster recovery between local data centers without relying on expensive dedicated dark fiber.</p>
            <p><strong>Infiniband:</strong> An architecture characterized by extreme throughput and ultra-low latency, predominantly used in High-Performance Computing (HPC) clusters and clustered databases (like Oracle RAC).</p>
        `,
        questions: [
            {
                q: "What is the difference between a Switch and a Director in a SAN environment?",
                a: "A switch is a standard networking device that connects nodes, while a Director is a massive, enterprise-class switch designed for high availability (no single point of failure), higher port density, and superior performance."
            },
            {
                q: "Why is Infiniband used in certain environments?",
                a: "Infiniband provides extremely high bandwidth and very low latency. It is primarily used in High-Performance Computing (HPC) and clustered database environments where inter-node communication speed is critical."
            },
            {
                q: "What role does Metro-Ethernet play in storage networking?",
                a: "Metro-Ethernet provides high-speed LAN-to-LAN connectivity over a metropolitan area. In storage, it is used for synchronous or asynchronous remote replication and disaster recovery between local data centers."
            },
            {
                q: "What is the function of a Host Bus Adapter (HBA)?",
                a: "An HBA is an expansion card that plugs into a host server's bus (like PCIe) and connects to the SAN. It offloads storage protocol processing (like FC or iSCSI) from the server's main CPU, improving overall system performance."
            },
            {
                q: "Explain Fibre Channel over Ethernet (FCoE).",
                a: "FCoE encapsulates Fibre Channel frames over Ethernet networks. It allows Fibre Channel to use 10 Gigabit Ethernet networks (or higher) while preserving the Fibre Channel protocol, enabling I/O consolidation of LAN and SAN traffic onto a single network infrastructure."
            },
            {
                q: "What is a SAN Fabric?",
                a: "A SAN fabric is the network topology created by interconnecting Fibre Channel switches and directors. It allows any device connected to the fabric to communicate with any other device, providing scalability and redundancy."
            },
            {
                q: "What is Zoning in a SAN?",
                a: "Zoning is a logical grouping of ports or node names within a SAN fabric. It restricts communication so that members of a zone can only communicate with other members of the same zone, providing security and preventing unauthorized access to storage."
            }
        ]
    },
    {
        id: 5,
        title: "V. Business Continuity Backup and Recovery",
        marks: 40,
        notes: `
            <h4>1. Business Continuity (BC) Fundamentals</h4>
            <p>Business Continuity involves proactive planning and execution to ensure critical business functions remain operational during and after a disaster. The core metrics include:</p>
            <ul>
                <li><strong>Recovery Point Objective (RPO):</strong> Specifies the maximum acceptable data loss. An RPO of 1 hour means you must back up at least every hour.</li>
                <li><strong>Recovery Time Objective (RTO):</strong> Specifies the maximum acceptable downtime. An RTO of 4 hours means the system must be restored and running within 4 hours.</li>
            </ul>

            <h4>2. BC Planning Lifecycle</h4>
            <p>The lifecycle begins with establishing objectives, followed by the crucial <strong>Business Impact Analysis (BIA)</strong> to identify critical processes and the cost of their downtime. It proceeds to design, implementation, and continuous testing and maintenance of the BC plan.</p>

            <h4>3. Backup Methods & Architecture</h4>
            <p><strong>Full Backup:</strong> Copies all designated data. Requires the most time and space, but restores are the fastest.</p>
            <p><strong>Incremental Backup:</strong> Copies only data changed since the <em>last</em> backup. Extremely fast to execute, but restores require applying the full backup and every subsequent incremental backup.</p>
            <p><strong>Cumulative (Differential) Backup:</strong> Copies all data changed since the last <em>Full</em> backup. Balances backup time and restore time.</p>

            <h4>4. Backup Topologies & Targets</h4>
            <p><strong>Topologies:</strong></p>
            <ul>
                <li><strong>LAN-based:</strong> Backup traffic flows over the production IP network, potentially causing congestion.</li>
                <li><strong>SAN-based (LAN-free):</strong> Backup traffic moves directly from storage to the backup device over the SAN, bypassing the LAN.</li>
            </ul>
            <p><strong>Targets:</strong> Traditional tape drives are being replaced by Virtual Tape Libraries (VTLs) and purpose-built backup appliances featuring <strong>Data Deduplication</strong>, which identifies and eliminates redundant data segments to vastly reduce storage requirements.</p>
        `,
        questions: [
            {
                q: "Define RTO and RPO.",
                a: "RPO (Recovery Point Objective) dictates the maximum acceptable data loss (e.g., up to the last 4 hours). RTO (Recovery Time Objective) dictates the maximum acceptable downtime before systems must be restored and operational."
            },
            {
                q: "Compare Incremental and Cumulative (Differential) backups.",
                a: "Incremental backups copy only the data modified since the *last* backup of any type, making daily backups very fast but restores slow. Cumulative backups copy all data modified since the last *Full* backup, making daily backups progressively slower but restores much faster."
            },
            {
                q: "What is a Business Impact Analysis (BIA)?",
                a: "BIA is a systematic process to determine and evaluate the potential effects of an interruption to critical business operations as a result of a disaster, accident, or emergency. It helps define the RTO and RPO."
            },
            {
                q: "What is LAN-free backup?",
                a: "In a LAN-free backup topology, backup data travels directly from the primary storage to the backup device (like a tape library) over the high-speed SAN, rather than going through the production LAN, avoiding network congestion."
            },
            {
                q: "Explain Data Deduplication in backup environments.",
                a: "Data Deduplication is a compression technique that eliminates redundant copies of data segments. Instead of storing the same file or block multiple times, it stores one unique instance and replaces duplicates with a pointer to the original, vastly saving storage space."
            },
            {
                q: "What is a Virtual Tape Library (VTL)?",
                a: "A VTL is a disk-based storage system that emulates traditional physical tape libraries and tape drives. It offers much faster backup and restore speeds than physical tape while remaining compatible with existing tape-based backup software."
            },
            {
                q: "What is the difference between Disaster Recovery (DR) and Business Continuity (BC)?",
                a: "BC is a proactive strategy to ensure the business continues operating during and after a disruption. DR is a reactive subset of BC focused specifically on restoring IT infrastructure and operations after a disaster."
            }
        ]
    },
    {
        id: 6,
        title: "VI. Large Storage Systems",
        marks: 40,
        notes: `
            <h4>1. Scale-Out Architecture and Cloud Systems</h4>
            <p>Large-scale systems move away from "scale-up" (adding power to a single array) towards "scale-out" (adding many independent nodes). Cloud storage relies on distributed nodes working as a cohesive cluster.</p>
            <p><strong>Amazon S3 (Simple Storage Service):</strong> The foundational example of Object Storage. Data is stored as objects in "buckets", accessed via REST/HTTP APIs. Each object contains the data, rich metadata, and a globally unique identifier, allowing massive, flat scalability without the overhead of a traditional file system tree.</p>

            <h4>2. Google File System (GFS) & BigTable</h4>
            <p><strong>GFS:</strong> A highly scalable distributed file system created by Google. It is designed to run on cheap, commodity hardware and achieves fault tolerance through software replication (storing multiple copies of data across different nodes). It is optimized for large files and high sustained read/write bandwidth.</p>
            <p><strong>BigTable:</strong> A distributed storage system for managing structured data, built on top of GFS. It acts like a sparse, multi-dimensional sorted map and powers services like Google Earth and Google Analytics.</p>

            <h4>3. Programming Models: Hadoop Framework</h4>
            <p>Hadoop is an open-source framework derived from Google's GFS and MapReduce papers, designed for distributed storage and processing of massive datasets.</p>
            <ul>
                <li><strong>HDFS (Hadoop Distributed File System):</strong> The storage layer that breaks large files into blocks (e.g., 128MB) and distributes them across cluster nodes.</li>
                <li><strong>MapReduce:</strong> The processing layer where a "Map" task filters and sorts data locally on the nodes, and a "Reduce" task aggregates the results, bringing computation to the data rather than moving data to the computation.</li>
            </ul>
        `,
        questions: [
            {
                q: "What makes Object Storage (like Amazon S3) different from Block or File storage?",
                a: "Object storage manages data as objects rather than files in a hierarchy or blocks on a disk. Each object includes the data itself, a variable amount of metadata, and a globally unique identifier. It scales massively and is accessed via APIs (REST/HTTP) rather than traditional OS file system mounts."
            },
            {
                q: "Describe the core components of Hadoop.",
                a: "Hadoop consists primarily of HDFS (Hadoop Distributed File System) for highly fault-tolerant distributed storage, and MapReduce, a programming model for distributed processing and generating large data sets."
            },
            {
                q: "What is the purpose of Google File System (GFS)?",
                a: "GFS was designed to handle massive amounts of data by distributing it across thousands of inexpensive, commodity servers. It prioritizes high sustained bandwidth and fault tolerance over low latency."
            },
            {
                q: "What does 'Scale-Out' mean in large storage systems?",
                a: "Scale-Out (horizontal scaling) involves adding more independent nodes (servers with storage) to a cluster to increase capacity and performance, as opposed to Scale-Up (vertical scaling) which means adding more disks/memory to a single powerful server."
            },
            {
                q: "What is BigTable and how does it relate to GFS?",
                a: "BigTable is a distributed, high-performance, proprietary data storage system built by Google on top of GFS. While GFS handles raw file storage, BigTable manages structured data, acting as a sparse, multi-dimensional sorted map."
            },
            {
                q: "Explain the 'Map' and 'Reduce' functions in MapReduce.",
                a: "The 'Map' function processes input data in parallel across multiple nodes and produces intermediate key-value pairs. The 'Reduce' function then aggregates and combines these intermediate pairs to produce the final summarized output."
            },
            {
                q: "Why do large cloud storage systems favor eventual consistency over strict consistency?",
                a: "In globally distributed systems handling massive scale, enforcing strict consistency across all nodes simultaneously introduces high latency. Eventual consistency guarantees that if no new updates are made, all accesses will eventually return the last updated value, which improves availability and performance."
            }
        ]
    }
];

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
