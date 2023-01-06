<script>
export default {
    props: [
        'name', 
        'source', 
        'languages', 
        'languagesIcons', 
        'infos', 
        'picture',
        'link'
    ],
    data() {
        return {
            showInfos: false
        }
    },
    methods: {
        handleShowInfos() {
            this.showInfos = !this.showInfos
        }
    }
}
</script>
<template>
    <div class="col">
        <div class="project card rounded h-100" @click="handleShowInfos()">
            <img :src="picture" alt="" class="card-img-top h-100">
            <div class="card-body">
                <h3 class="card-title fw-bold">{{name}}</h3>
                <div class="content">
                    <div class="icons">
                        <i v-for="icon in languagesIcons" :class="icon" class="mx-1"></i>
                    </div>
                    <button class="btn">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div v-if="showInfos" class="showInfos">
        <div class="container">
            <h3>{{name}}</h3>
            <p>{{infos}}</p>
            <i class="fa-solid fa-circle-xmark" @click="handleShowInfos()"></i>
            <div class="text-center">
                <a v-if="source" :href="source" target="_blank">Code source</a>
                <a v-if="link" :href="link" target="_blank">Site web</a>
            </div>
        </div>
    </div>
</template>