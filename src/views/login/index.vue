<template>
    <div class="login-containers">
        <el-row>
            <el-col :span="12" :xs="0"></el-col>
            <el-col :span="12" :xs="24">

                <el-from class="login-from">
                    <h1>Hello</h1>
                    <h2>欢迎第一次</h2>
                <el-from-item>
                    <el-input type="username"></el-input>
                </el-from-item>
                <el-from-item>
                    <el-input type="password"></el-input>
                </el-from-item>

                </el-from></el-col>

        </el-row>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.login-containers {
    width: 100%;
    height: 100vh;
    background: url('@/assets/images/background.jpg') no-repeat;
    background-size: cover;
    .login-from{
        position: relative;
        width: 80%;
        top: 30vh;
        background: url('@/assets/images/login_form.png');
        background-size: cover;
        h1{
            color: white;
            font-size: 40px;
        }
        h2{
            color: white;
            font-size: 20px;
            margin: 20px 0px;

        }
    }
}
</style>
