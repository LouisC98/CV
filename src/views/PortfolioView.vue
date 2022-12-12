<script>
import Project from '../components/Project.vue'
import projectData from '../data/portfolioData.js' 

export default {
    components: {
        Project
    },
    data() {
        return {
            selectedLanguage: 'all',
            selectOptions: [
                'javascript', 'php', 'angular', 'symfony', 'vuejs'
            ],
        }
    },
    computed: {
        selectedProjects() {
            return projectData.filter(project => project.languages.includes(this.selectedLanguage));
        }
    }
}
</script>

<template>
    <div class="portfolio container py-3">
        <h2 class="text-center fw-bold mb-3 fs-1">Projets</h2>
        <form class="text-center mb-3">
            <label for="selectedLanguage" class="fw-bold">Filtrer  : </label>
            <select name="selectedLanguage" v-model="selectedLanguage">
                <option value="all">Tous</option>
                <option v-for="option in selectOptions" :value="option">
                    {{option.charAt(0).toUpperCase().concat(option.slice(1))}}
                </option>
            </select>
        </form>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 justify-content-center">
            <Project 
                v-for="project in selectedProjects" 
                :name="project.name"
                :languages="project.languages"
                :languagesIcons="project.languagesIcons"
                :source="project.source"
                :infos="project.infos"
                :picture="project.picture"
            />
        </div>
    </div>
</template>