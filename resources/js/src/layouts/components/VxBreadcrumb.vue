<!-- =========================================================================================
    File Name: VxBreadcrumb.vue
    Description: Breadcrumb component
    Component Name: VxBreadcrumb
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>

    <div class="vx-breadcrumb" v-if="breadcrumbs.length">


        <ul class="flex flex-wrap items-center">
            <li class="inline-flex items-end">
                <inertia-link href="/">
                    <feather-icon icon="HomeIcon" svgClasses="h-5 w-5 mb-1 stroke-current text-primary"></feather-icon>
                </inertia-link>
                <span class="breadcrumb-separator mx-2"><feather-icon icon="ChevronsRightIcon" svgClasses="w-4 h-4" /></span>
            </li>

            <li v-for="(link, index) in breadcrumbs" v-if="index !== breadcrumbs.length -1" class="breadcrumb-item active inline-flex items-center">
                <inertia-link v-bind:href="link.link">{{ link.text }}</inertia-link>
                <span  class="breadcrumb-separator mx-2 flex items-start"><feather-icon icon="ChevronsRightIcon" svgClasses="w-4 h-4" /></span>
            </li>
            <li v-else>
                <span>{{breadcrumbs[index].text}}</span>
            </li>
            <li class="inline-flex">
                <span v-if="" class="cursor-default"></span>
            </li>
        </ul>
    </div>
</template>

<script>
export default{
    name: 'vx-breadcrumb',
    props: ['breadcrumbs']
}
</script>