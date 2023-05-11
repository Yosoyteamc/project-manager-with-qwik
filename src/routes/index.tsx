import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Task from '~/components/task/task';

export default component$(() => {
  return (
    <>
      <div class={'bg-gray-100 p-3'}>
				<Task></Task>
			</div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
