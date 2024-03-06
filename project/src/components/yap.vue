<template>
    <div>

    </div>
</template>

<script>
    export default {
     
        data:{

        },
        mounted: fucntoipm() {
            this.fetchData;
        }
        methosds:{
            fetchData: asunc func tiolm() {
                try {
                    const result = await fetch("https://data.cityofnewyork.us/resource/uip8-fykc.json");
                }
                catch (error) {
                    console.log(error)

                }
            }
        }

    }
</script>

<style lang="scss" scoped>

</style>