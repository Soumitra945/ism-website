const ismData = [
    {
        id: 1,
        title: "I. Introduction to information storage and Data center",
        marks: 10,
        notes: `
            <h4>1. Introduction to Information Storage</h4>
            <p><strong>Data</strong> refers to raw facts, signals, or observations. When data is processed, organized, and presented in a given context to make it useful, it becomes <strong>Information</strong>. Businesses rely on information for competitive advantage, leading to an explosion in digital data generation.</p>
            <p><strong>Evolution of Storage Architecture:</strong></p>
            <ul>
                <li><strong>Server-Centric Storage:</strong> Initially, storage was internal to servers (DAS). As data grew, the limitation of isolated data islands became apparent.</li>
                <li><strong>Information-Centric Storage:</strong> The architecture evolved to separate storage from servers, connecting them via high-speed networks (SAN and NAS). This allowed storage to be shared, managed centrally, and scaled independently of servers.</li>
            </ul>

            <h4>2. Data Center Infrastructure</h4>
            <p>A Data Center is a specialized facility that houses computer systems, storage arrays, and associated components like telecommunications and storage networks. The <strong>Five Core Elements</strong> of a data center are:</p>
            <ul>
                <li><strong>Application:</strong> A computer program that provides the logic for computing operations (e.g., email server, ERP software).</li>
                <li><strong>DBMS (Database Management System):</strong> Software that provides a structured way to store, organize, and manage data (e.g., Oracle, SQL Server). It acts as an interface between applications and the data.</li>
                <li><strong>Host or Compute:</strong> The servers (hardware and OS) that run the applications and DBMS. They process requests and manage resources.</li>
                <li><strong>Network:</strong> The data path that facilitates communication among clients, hosts, and storage devices. This includes LANs (Local Area Networks) and SANs (Storage Area Networks).</li>
                <li><strong>Storage:</strong> The physical devices (HDDs, SSDs, arrays) that store the data persistently.</li>
            </ul>
            <p><strong>Key Characteristics of Data Center Elements:</strong></p>
            <ul>
                <li><strong>Availability:</strong> Information must be accessible when required.</li>
                <li><strong>Security:</strong> Policies to prevent unauthorized access and protect confidentiality.</li>
                <li><strong>Scalability:</strong> Ability to add resources without interrupting business operations.</li>
                <li><strong>Performance:</strong> Delivering optimal I/O rates and low latency based on SLAs.</li>
                <li><strong>Data Integrity:</strong> Ensuring data is unaltered and accurate.</li>
            </ul>

            <h4>3. Information Lifecycle Management (ILM)</h4>
            <p>Data does not hold the same value throughout its lifecycle. A newly created invoice is highly accessed and valuable, but after a few months, it may only be kept for regulatory compliance.</p>
            <p><strong>ILM</strong> is a proactive strategy that enables an IT organization to manage the data from its creation until its final disposition. It involves aligning the business value of information with the most appropriate and cost-effective storage infrastructure.</p>
            <p><strong>Characteristics of ILM Strategy:</strong></p>
            <ul>
                <li><strong>Business-centric:</strong> Aligned with core business processes.</li>
                <li><strong>Centrally managed:</strong> Policies are managed from a central point rather than individual departments.</li>
                <li><strong>Policy-based:</strong> Automated movement of data across storage tiers based on pre-defined policies.</li>
                <li><strong>Heterogeneous:</strong> Works across different types of storage systems and OS platforms.</li>
            </ul>
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
            <h4>1. Data Protection: RAID (Redundant Array of Independent Disks)</h4>
            <p>RAID is a technology that combines multiple physical disk drives into one or more logical units for the purposes of data redundancy, performance improvement, or both. It can be implemented in <strong>Hardware</strong> (using dedicated RAID controllers, preferred for high performance) or <strong>Software</strong> (managed by the host OS, utilizing host CPU cycles).</p>
            <p><strong>Key RAID Techniques:</strong></p>
            <ul>
                <li><strong>Striping:</strong> Distributing data across multiple drives to increase performance. No fault tolerance.</li>
                <li><strong>Mirroring:</strong> Storing the exact same data on two different drives. High fault tolerance but 50% capacity overhead.</li>
                <li><strong>Parity:</strong> A mathematical calculation (XOR) used to rebuild missing data if a drive fails. Offers a balance of protection and capacity utilization.</li>
            </ul>
            <p><strong>Standard RAID Levels:</strong></p>
            <ul>
                <li><strong>RAID 0 (Striped Array):</strong> High I/O performance. If one disk fails, all data is lost.</li>
                <li><strong>RAID 1 (Mirrored Array):</strong> High read performance and full data redundancy. Costly due to 50% space penalty.</li>
                <li><strong>RAID 1+0 / RAID 0+1 (Nested):</strong> Combines mirroring and striping. RAID 1+0 (mirrored stripes) is preferred for better fault tolerance.</li>
                <li><strong>RAID 5 (Striping with Distributed Parity):</strong> Parity is distributed across all disks. Tolerates a single disk failure. Subject to a <strong>Write Penalty</strong>.</li>
                <li><strong>RAID 6 (Striping with Dual Distributed Parity):</strong> Uses two parity calculations. Tolerates two simultaneous disk failures. Higher write penalty than RAID 5.</li>
            </ul>
            <p><strong>Hot Spares:</strong> Standby drives that automatically replace a failed drive in a RAID array.</p>

            <h4>2. Intelligent Storage Systems (ISS)</h4>
            <p>An ISS is a highly optimized storage array featuring massive cache memory and multiple redundant components to deliver high I/O performance and availability. Its core components are:</p>
            <ul>
                <li><strong>Front-end:</strong> Provides connectivity to the host servers via ports (FC, iSCSI). It receives I/O requests and routes them to the cache.</li>
                <li><strong>Cache:</strong> Semiconductor memory (RAM) where data is placed temporarily. It significantly reduces read/write latency. <strong>Read Cache algorithms</strong> include Prefetching and LRU.</li>
                <li><strong>Cache Protection:</strong> Since cache is volatile RAM, ISS uses battery backups or cache vaulting (dumping cache to dedicated disks on power loss) to prevent data corruption.</li>
                <li><strong>Back-end:</strong> Connects the cache to the physical disk drives. It manages disk controllers and physical disk I/O.</li>
                <li><strong>Physical Disks:</strong> The actual HDDs or SSDs where data resides. They are typically grouped into RAID arrays.</li>
            </ul>
            <p><strong>LUNs (Logical Unit Numbers):</strong> Physical RAID groups are logically partitioned into smaller volumes called LUNs. <strong>LUN Masking</strong> secures storage by ensuring only authorized hosts can see specific LUNs.</p>
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
            <p>DAS is an architecture where storage connects directly to servers via internal buses or external cables (like SCSI or SAS) without a network connecting them. While simple and low-cost to deploy initially, it suffers from severe limitations in enterprise environments: poor scalability, "islands of information" making resource sharing difficult, and limited distance between the host and storage device.</p>

            <h4>2. Storage Area Network (SAN)</h4>
            <p>A SAN is a dedicated, high-speed network that connects shared storage arrays to multiple host servers. It provides <strong>block-level</strong> access, meaning the storage appears to the host OS as a local physical drive.</p>
            <p><strong>Fibre Channel (FC) SAN:</strong> The traditional, high-performance SAN standard.</p>
            <ul>
                <li><strong>Components:</strong> Node ports (HBAs in servers, storage ports), Cabling (Optical fiber or copper), Interconnect devices (FC Switches, Directors), and Storage Arrays.</li>
                <li><strong>Topologies:</strong> Point-to-Point (direct connection), FC-AL (Arbitrated Loop), and <strong>FC-SW (Switched Fabric)</strong>. FC-SW is the modern standard, offering high scalability and allowing multiple simultaneous communications.</li>
                <li><strong>Zoning:</strong> A fabric-based security mechanism that logically groups ports or node names. Devices can only communicate with other devices in their zone, preventing unauthorized access.</li>
            </ul>

            <h4>3. IP SAN (iSCSI and FCIP)</h4>
            <p>IP SAN utilizes standard Ethernet and TCP/IP networking to transport block-level storage traffic. It is cost-effective as it leverages existing network infrastructure.</p>
            <ul>
                <li><strong>iSCSI (Internet SCSI):</strong> Encapsulates SCSI commands into IP packets. Hosts use iSCSI Initiators to talk to iSCSI Targets (storage arrays).</li>
                <li><strong>FCIP (Fibre Channel over IP):</strong> A tunneling protocol that encapsulates Fibre Channel frames into IP packets. Primarily used for connecting disparate FC SAN islands over long-distance WANs for disaster recovery replication.</li>
            </ul>

            <h4>4. Network Attached Storage (NAS)</h4>
            <p>NAS is an IP-based, dedicated device that provides <strong>file-level</strong> data access. Unlike SAN (block storage), NAS includes its own optimized operating system and file system. Clients request entire files rather than raw disk blocks.</p>
            <ul>
                <li><strong>Benefits:</strong> Easy file sharing across different OS platforms, centralizes file data, and reduces the overhead on general-purpose application servers.</li>
                <li><strong>File Sharing Protocols:</strong>
                    <ul>
                        <li><strong>NFS (Network File System):</strong> Predominantly used in UNIX and Linux environments.</li>
                        <li><strong>CIFS (Common Internet File System) / SMB:</strong> The standard file sharing protocol for Windows environments.</li>
                    </ul>
                </li>
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
            <h4>1. Network Connectivity Components in SAN</h4>
            <p>Enterprise storage networks require specialized hardware to ensure lossless, high-speed data transmission.</p>
            <ul>
                <li><strong>Host Bus Adapters (HBAs):</strong> An expansion board installed in a host server. It acts as the interface between the server's internal bus (e.g., PCIe) and the SAN fabric. It offloads the heavy protocol processing (like Fibre Channel frame encapsulation) from the server's main CPU.</li>
                <li><strong>FC Switches:</strong> Intelligent devices that route traffic between initiators (hosts) and targets (storage) using Fibre Channel addressing. They form the building blocks of a SAN fabric.</li>
                <li><strong>Directors:</strong> Massive, enterprise-class switching devices. Unlike standard edge switches, Directors feature highly modular designs with hundreds of ports, and completely redundant internal components (control processors, crossbar switches, power supplies) ensuring no single point of failure (99.999% availability).</li>
                <li><strong>Inter-Switch Links (ISLs):</strong> Connections between two switches. Multiple ISLs can be trunked together to increase bandwidth and provide redundancy between switches.</li>
            </ul>

            <h4>2. Advanced SAN Architectures</h4>
            <ul>
                <li><strong>VSAN (Virtual SAN):</strong> Similar to VLANs in networking, VSANs allow a single physical SAN fabric to be logically divided into multiple isolated virtual fabrics. This provides enhanced security, fault isolation, and simplified management for multi-tenant environments.</li>
                <li><strong>FCoE (Fibre Channel over Ethernet):</strong> A protocol that encapsulates Fibre Channel frames over lossless 10 Gigabit (or higher) Ethernet networks. It enables <strong>I/O Consolidation</strong>—running both regular IP data traffic and block storage traffic over a single Ethernet cable and converged network adapter (CNA), reducing cabling and switch port costs.</li>
            </ul>

            <h4>3. Specialized Networking Technologies</h4>
            <ul>
                <li><strong>Metro-Ethernet:</strong> High-bandwidth Metropolitan Area Network (MAN) services based on Ethernet standards. In storage, it is heavily utilized to provide cost-effective, high-speed links between primary data centers and disaster recovery sites for synchronous or asynchronous data replication.</li>
                <li><strong>Infiniband:</strong> A specialized, switched fabric communications link characterized by enormous throughput and extremely low latency. It is primarily used in High-Performance Computing (HPC) clusters, supercomputers, and clustered enterprise databases (like Oracle RAC) where inter-node communication delays must be minimized.</li>
            </ul>
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
            <p><strong>Business Continuity</strong> is an integrated process that includes policies, procedures, and resources to ensure critical business operations continue functioning during and after a disruptive event (from hardware failure to natural disasters).</p>
            <p><strong>Key Metrics:</strong></p>
            <ul>
                <li><strong>Recovery Time Objective (RTO):</strong> The maximum acceptable amount of time a system can be down. It dictates how fast you must recover.</li>
                <li><strong>Recovery Point Objective (RPO):</strong> The maximum acceptable amount of data loss, measured in time. An RPO of 2 hours means you must back up data at least every 2 hours.</li>
            </ul>
            <p><strong>BC Planning Lifecycle:</strong> Involves establishing objectives, conducting a <strong>Business Impact Analysis (BIA)</strong> (identifying critical processes and the financial/operational impact of their disruption), designing the solution, implementation, and rigorous, continuous testing.</p>

            <h4>2. Backup and Recovery Architecture</h4>
            <p>Backup is an additional copy of production data created and retained for the sole purpose of recovering lost or corrupted data.</p>
            <p><strong>Backup Granularity & Methods:</strong></p>
            <ul>
                <li><strong>Full Backup:</strong> A complete copy of all designated data. It takes the longest to perform but offers the fastest recovery time since only one dataset is needed.</li>
                <li><strong>Incremental Backup:</strong> Copies only the data that has changed since the <em>last backup of any type</em>. Very fast to backup, but restoring requires the last full backup plus every subsequent incremental backup.</li>
                <li><strong>Cumulative (Differential) Backup:</strong> Copies all data that has changed since the <em>last Full backup</em>. It offers a middle ground: backups take longer than incremental, but restores only require the full backup and the latest cumulative backup.</li>
            </ul>
            <p><strong>Backup Topologies:</strong></p>
            <ul>
                <li><strong>LAN-based:</strong> Data flows from the storage, through the host server, over the production LAN to the backup device. This can severely congest the network.</li>
                <li><strong>SAN-based (LAN-free):</strong> The backup device is attached to the SAN. Data flows directly from the storage array to the backup target over the high-speed Fibre Channel network, bypassing the production LAN entirely.</li>
            </ul>
            <p><strong>Modern Backup Targets & Deduplication:</strong></p>
            <p>While physical tape libraries were traditional, modern environments use disk-based backups or <strong>Virtual Tape Libraries (VTLs)</strong>. To make disk backups cost-effective, <strong>Data Deduplication</strong> is utilized. Deduplication identifies redundant data segments (blocks or files) and stores only a single unique instance, replacing duplicates with a small pointer. This can reduce backup storage requirements by 10x to 50x.</p>
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
            <h4>1. Scale-Out Architecture and Cloud Storage</h4>
            <p>Traditional enterprise storage relies on <strong>Scale-up</strong> architecture (adding more disks and memory to a pair of monolithic controllers). In contrast, massive data environments utilize <strong>Scale-out</strong> architecture, where performance and capacity are increased by adding independent, commodity nodes to a distributed cluster. Cloud storage systems heavily leverage scale-out designs to achieve virtually limitless capacity.</p>
            <p><strong>Object Storage (e.g., Amazon S3):</strong> Unlike file systems (which use complex directory trees) or block storage (raw disk sectors), Object Storage stores data as discrete "objects" in a flat namespace. Each object contains:</p>
            <ul>
                <li>The payload data itself.</li>
                <li>Extensive, customizable metadata.</li>
                <li>A globally unique identifier.</li>
            </ul>
            <p>This architecture eliminates the overhead of file system locking and hierarchy management, allowing it to scale to exabytes of data across global regions. It is accessed via standard web APIs (REST/HTTP) rather than OS mounts.</p>

            <h4>2. Google File System (GFS) & BigTable</h4>
            <p><strong>GFS (Google File System):</strong> A proprietary distributed file system designed by Google to run on massive clusters of cheap, fault-prone commodity hardware. It achieves reliability through software-level data replication (typically keeping 3 copies of every chunk on different nodes). It is optimized for enormous files and high sustained sequential read/write bandwidth rather than low latency.</p>
            <p><strong>BigTable:</strong> Built on top of GFS, BigTable is a compressed, high-performance, proprietary data storage system designed to manage massive amounts of structured data (like web indexing data or user profiles). It operates as a distributed, sparse, multi-dimensional sorted map.</p>

            <h4>3. The Hadoop Framework</h4>
            <p>Hadoop is an open-source framework inspired by Google's GFS and MapReduce whitepapers. It is designed to store and process gigantic datasets distributed across large clusters of commodity servers.</p>
            <ul>
                <li><strong>HDFS (Hadoop Distributed File System):</strong> The storage layer of Hadoop. It takes large files, splits them into massive blocks (e.g., 128MB or 256MB), and distributes these blocks redundantly across the "DataNodes" in the cluster. A central "NameNode" tracks where all the blocks are located.</li>
                <li><strong>MapReduce Paradigm:</strong> The processing layer. Instead of moving massive amounts of data over the network to a central CPU for processing, MapReduce moves the computation <em>to the data</em>.
                    <ul>
                        <li><strong>Map Phase:</strong> Processing tasks run locally on the DataNodes where the data blocks physically reside, filtering and sorting the raw data into key-value pairs.</li>
                        <li><strong>Reduce Phase:</strong> The system aggregates, summarizes, and combines the intermediate results from the Map phase to produce the final output.</li>
                    </ul>
                </li>
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
