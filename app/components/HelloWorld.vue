
<template>
    <Page class="page">
        <ActionBar title="Home" class="action-bar" />
        <ScrollView>
            <GridLayout>
                <!--Add your page content here-->
                <GridLayout>
                    <Label textWrap="true" color="white" text="Mended" class="h1 description-label" />
                </GridLayout>
                <Image src="~/assets/images/heart_red.png" />
                <Button text="Button" @tap="$navigateTo(homePage)" />
            </GridLayout>
        </ScrollView>
    </Page>
</template>

<script>
    export default {
        methods: {
            onButtonTap() {
                console.log("Button was pressed");
            }
        },

        data() {
            return {
                homePage: Home
            };
        }
    };
</script>

<style scoped>
    GridLayout {
        border: solid, green, 1;
    }

    .background {
        width: 100%;
        height: 100%;
    }

    .home-panel {
        vertical-align: center;
        font-size: 20;
        margin: 15;
    }

    .description-label {
        margin-bottom: 15;
    }
</style>