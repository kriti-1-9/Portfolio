export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
] as const

export const heroWords = [
  'Python',
  'Backend',
  'Cybersecurity',
  'Networking',
  'FastAPI',
  'Docker',
  'System Design',
] as const

export const heroStats = [
  { value: '450+', label: 'DSA Problems' },
  { value: '79.14%', label: 'Academic Score' },
  { value: '7k+', label: 'CTF Participants' },
] as const

export const profile = {
  name: 'KRITI DWIVEDI',
  title: 'Software Engineer',
  subtitle:
    'Final-year Computer Science student focused on secure backend engineering, cybersecurity, and high-quality software delivery.',
  email: 'dwivedikriti700@gmail.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  leetcode: 'https://leetcode.com',
  location: 'Kanpur, Uttar Pradesh',
  phone: '+91 7880719251',
} as const

export const aboutHighlights = [
  'Final-year B.Tech Computer Science student specializing in Cyber Security',
  'Strong foundation in Python, OOP, DSA, networking, and backend engineering',
  'Hands-on experience building secure APIs, encrypted systems, and threat-detection projects',
  'Interested in software engineering, QA automation, and security engineering roles',
] as const

export const aboutStats = [
  { label: 'Academic Performance', value: '79.14%' },
  { label: 'Core Strengths', value: 'Backend + Security' },
  { label: 'Core Subjects', value: 'OS · DBMS · OOP · CN' },
] as const

export const skills = {
  languages: ['Python', 'C++', 'C', 'JavaScript', 'C#', 'Bash'],
  backend: ['FastAPI', 'Flask', 'REST APIs', 'PostgreSQL', 'Redis', 'Docker', 'CI/CD'],
  testing: ['Selenium', 'Manual Testing', 'STLC', 'SDLC', 'Test Case Design', 'Bug Reporting'],
  security: ['Nmap', 'Wireshark', 'Metasploit', 'Burp Suite', 'OWASP Top 10', 'AES Encryption', 'VAPT'],
  core: ['Data Structures & Algorithms', 'OOP', 'Operating Systems', 'DBMS', 'Computer Networks', 'Cryptography'],
} as const

export const projects = [
  {
    title: 'SecureEdge',
    subtitle: 'API Security Gateway & Threat Detection Platform',
    description:
      'Built a distributed platform with JWT auth, RBAC, Redis rate limiting, threat detection, centralized logging, and monitoring dashboards.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'CI/CD'],
  },
  {
    title: 'AI Deepfake & Phishing Detection System',
    subtitle: 'Machine Learning Threat Detection',
    description:
      'Collaborated on an ML-driven threat detection system for phishing URLs and deepfake content with structured data pipelines and REST APIs.',
    stack: ['Python', 'Machine Learning', 'REST API', 'Data Pipelines'],
  },
  {
    title: 'Secure Encrypted Chat Application',
    subtitle: 'AES-encrypted messaging system',
    description:
      'Developed an end-to-end encrypted chat application with modular OOP architecture and robust debugging for concurrency issues.',
    stack: ['Python', 'AES', 'Sockets', 'OOP'],
  },
] as const

export const achievements = [
  'HACK IITK 2026 CTF Qualifier selected from 7,000+ participants across India',
  'CyberShield Hackathon Finalist recognised for real-world digital threat detection work',
  'HackerRank 5-Star Python and 450+ DSA problems solved across LeetCode and HackerRank',
] as const

export const certifications = [
  'Google Cybersecurity Professional Certificate',
  'Cisco Ethical Hacking & Networking',
  'Infosys Python, DBMS, OOP, HTML5/CSS3',
  'TATA Cybersecurity Analyst Simulation',
  'HackerRank Python, SQL, Problem Solving',
] as const
