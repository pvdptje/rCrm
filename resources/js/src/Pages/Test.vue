<template>
    <layout v-bind:breadcrumbs="breadcrumbs()" title="Tester title">
        asd
    </layout>
</template>



<script>
    import Layout from '@/layouts/Layout';
    export default {
        components: {
            Layout,
        },
        method: {
            breadcrumbs(){
                return [
                    {
                        'link': 'ja',
                        'text': 'text'
                    },
                    {
                        'link': 'ja',
                        'text': 'text'
                    },
                    {
                        'link': 'ja',
                        'text': 'text'
                    },
                ]
            }
        }
    }
</script>