export const Projects = [
	{
		id: '1',
		title: 'Project 1',
		processes: ['New Request', 'In Progress', 'In Review', 'Done'],
		tasks: [
			{
				id: '1',
				title: 'Pages "About" and "Careers"',
				description: 'All the details are in the file, I\'m sure it will turn out cool!',
				tags: ['Design', 'Frontend'],
				subtasks: [{title:'About', state: true},{title:'Careers', state: false},{title:'Contact', state: false}],
				comments: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
				owner: 'John Doe',
				created: {
					date: '2021-10-10',
					time: '10:10'
				},
				members: ['John Doe', 'Jane Doe', 'John Smith', 'Jane Smith'],
				link: ['https://www.google.com/', 'https://www.google.com/', 'https://www.google.com/'],
				process: 'New Request'
			},
		],
	},
]