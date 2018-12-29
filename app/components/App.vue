<template>
    <Page class="page">
        <ScrollView>
            <AbsoluteLayout width="100%" height="100%">
                <FlexboxLayout width="100%" height="100%" justifyContent="center"
                    alignItems="center">
                    <StackLayout id="background">
                    </StackLayout>
                </FlexboxLayout>
                <Image src="~/assets/images/heart_red.png" opacity="0.75" width="350"
                    height="350" :marginLeft="(width - 250)" :marginTop="(height - 400)"
                    id="earth" />
                <FlexboxLayout flexDirection="column" height="100%" width="100%"
                    id="app">
                    <Header height="100" class="header" />
                    <StackLayout class="home-panel" flexGrow="7" id="view">

                    </StackLayout>
                    <Footer height="100" class="footer" />
                </FlexboxLayout>
            </AbsoluteLayout>
        </ScrollView>
    </Page>
</template>

<script>
    import Header from "./Header";
    import Footer from "./Footer";
    import Home from "./Home";
    // const platform = require("tns-core-modules/platform");
    // const application = require("tns-core-modules/application");

    export default {
        methods: {},

        data() {
            return {
                // platform: "",
                width: 0,
                height: 0
            };
        },

        mounted() {
            // this.width = platform.screen.mainScreen.widthDIPs;
            // this.height = platform.screen.mainScreen.heightDIPs;
            // if (application.ios) {
            //     this.platform = "ios";
            // } else if (application.android) {
            //     this.platform = "android";
            // }
        },

        components: {
            Header,
            Footer,
            Home
        }
    };
</script>

<style>
</style>