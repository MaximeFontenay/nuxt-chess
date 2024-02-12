import { Board } from '../.nuxt/components';
<script lang="ts" setup>
const sidebar = ref<HTMLElement | null>(null)
const isSidebarOpen = ref(false)

const toggleSidebar = () => {
	isSidebarOpen.value = !isSidebarOpen.value
}

</script>

<template>
	<aside class="sidebar" ref="sidebar">
		<Transition name="fade">
			<AtomButton @click="toggleSidebar" type="white" size="lg" stroke :iconName="isSidebarOpen ? 'ph:arrow-circle-left' :'ph:arrow-circle-right'" />
		</Transition>


		<nav>
			<ul>
				<li>
					<NuxtLink to="/">
						<AtomButton :label="isSidebarOpen ? 'Nouvelle partie' : ''" type="white" :size="isSidebarOpen ? 'md' : 'lg'" block stroke iconName="ph:house" />
					</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/">
						<AtomButton :label="isSidebarOpen ?'Mes amis' : ''" type="white" :size="isSidebarOpen ? 'md' : 'lg'" block stroke iconName="ph:users" />
					</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/">
						<AtomButton :label="isSidebarOpen ? 'Mon compte' : ''" type="white" :size="isSidebarOpen ? 'md' : 'lg'" block stroke iconName="ph:user-circle" />
					</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/">
						<AtomButton :label="isSidebarOpen ? 'Déconnexion' : ''" type="white" :size="isSidebarOpen ? 'md' : 'lg'" block stroke iconName="ph:sign-out" />
					</NuxtLink>
				</li>

			</ul>
		</nav>
	</aside>
</template>


<style lang="scss" scoped>
@use 'assets/_variables.scss' as *;

.sidebar {
    height: 100%;
    padding: 2.5rem 1rem;
    border-right: 1px solid #383838;
    background: rgba(0, 0, 0, 0.40);
    backdrop-filter: blur(107px);

    ul {
        display: grid;
        grid-template-columns: 1fr;
        width: fit-content;
        gap: .5rem;
		margin-top: 2rem;
    }
}

</style>