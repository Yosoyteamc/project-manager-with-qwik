export interface TaskType{
	id: string;
	title: string;
	description: string;
	tags: string[];
	subtasks: {title: string, state: boolean}[];
	comments: string[];
	owner: string;
	created: {
		date: string;
		time: string;
	};
	members: string[];
	link: string[];
	process: string;
}

export interface ProjectType{
	id: string;
	title: string;
	tasks: TaskType[];
}