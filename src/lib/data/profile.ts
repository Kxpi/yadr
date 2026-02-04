// Profile data configuration
// Replace all placeholder values with your own information

export const profile = {
	name: "Your Name",
	title: "Software Engineer",
	tagline: "Full Stack Development | React, Node.js, TypeScript",
	location: "City, Country",
	email: "your.email@example.com",
	summary: `Software engineer with experience building web applications and APIs. Focused on writing clean code and creating user-friendly interfaces. Comfortable working across the full stack.`,
	links: {
		github: "https://github.com/yourusername",
		linkedin: "https://linkedin.com/in/yourusername"
	}
};

// Skills organized by category
// Add, remove, or reorganize categories as needed
export const skills = [
	// Frontend
	{ name: "React", category: "frontend" },
	{ name: "TypeScript", category: "frontend" },
	{ name: "JavaScript", category: "frontend" },
	{ name: "HTML/CSS", category: "frontend" },
	{ name: "Tailwind CSS", category: "frontend" },
	
	// Backend
	{ name: "Node.js", category: "backend" },
	{ name: "Express", category: "backend" },
	{ name: "Python", category: "backend" },
	{ name: "REST APIs", category: "backend" },
	
	// Databases
	{ name: "PostgreSQL", category: "databases" },
	{ name: "MongoDB", category: "databases" },
	{ name: "Redis", category: "databases" },
	
	// Tools & DevOps
	{ name: "Git", category: "tools" },
	{ name: "Docker", category: "tools" },
	{ name: "GitHub Actions", category: "tools" },
	{ name: "AWS", category: "tools" },
];

export interface Experience {
	company: string;
	role: string;
	period: string;
	location: string;
	description: string;
	highlights: string[];
}

// Work experience
// Add your positions in reverse chronological order (most recent first)
export const experience: Experience[] = [
	{
		company: "Tech Company",
		role: "Software Engineer",
		period: "Jan 2023 - Present",
		location: "City, Country",
		description: "Developing web applications and APIs for customer-facing products.",
		highlights: [
			"Built and maintained React applications with TypeScript",
			"Developed RESTful APIs using Node.js and Express",
			"Collaborated with product and design teams on feature development",
			"Improved application performance and user experience"
		]
	},
	{
		company: "Startup Inc",
		role: "Junior Software Engineer",
		period: "Jun 2021 - Dec 2022",
		location: "City, Country",
		description: "Worked on full-stack development for early-stage product.",
		highlights: [
			"Implemented new features across frontend and backend",
			"Fixed bugs and improved code quality",
			"Participated in code reviews and team planning"
		]
	},
	// Add more positions as needed
];

// Key highlights - your top 4 achievements or areas of expertise
export const highlights = [
	{
		title: "Full Stack Development",
		description: "Experience building complete web applications from frontend to backend."
	},
	{
		title: "Modern JavaScript",
		description: "Proficient in React, TypeScript, and Node.js ecosystem."
	},
	{
		title: "API Development",
		description: "Designed and implemented RESTful APIs with proper architecture."
	},
	{
		title: "Team Collaboration",
		description: "Worked effectively in agile teams with code reviews and pair programming."
	}
];

// Education
export const education = {
	institution: "University Name",
	degree: "Bachelor of Science",
	field: "Computer Science",
	period: "Sep 2017 - Jun 2021"
};

// Certifications (optional - remove if not applicable)
export const certifications = [
	{
		name: "Certification Name",
		issuer: "Issuing Organization"
	},
	// Add more certifications as needed
];
