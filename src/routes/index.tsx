import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { ColumnProcess } from '~/components/column-process/column-process';
import { Projects } from '~/data/projects';

export default component$(() => {
  return (
    <>
		<div class={'bg-gray-100 flex gap-2'}>
			{
				Projects[0].process.map((process, index) => {
					return <ColumnProcess key={index} title={process.title} color={process.color} TaskList={process.tasks}></ColumnProcess>
				})
			}
		</div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Project Manager',
  meta: [
    {
      name: 'description',
      content: 'Project Manager',
    },
  ],
};
