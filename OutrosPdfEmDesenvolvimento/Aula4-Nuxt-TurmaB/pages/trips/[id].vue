<script setup>
    let dynamicImage = [
    'https://cf.bstatic.com/xdata/images/hotel/square200/438794734.webp?k=39395abd8a4d31dff2a9a7addf21f922ed1ca609e73442d5645ca834de6e35f8&o=',
    'https://cf.bstatic.com/xdata/images/hotel/square200/295787269.webp?k=9446d3203db1d1988381bb113c9f49726f844a16c4abcc8e8ec0e19e1c56be6a&o=',
    'https://cf.bstatic.com/xdata/images/hotel/square200/499805594.webp?k=836bcafc226388b95ae5396c84d9355fd4965586c886f64ebcc9549e32301a50&o='
    ];
        
    //acessamos o mecanismo de rotas do NUXT
    const route = useRoute();
    // if(route.params.id == 1){
    //     dynamicImage = 'https://cf.bstatic.com/xdata/images/hotel/square200/438794734.webp?k=39395abd8a4d31dff2a9a7addf21f922ed1ca609e73442d5645ca834de6e35f8&o=';
    // }
    // else if(route.params.id == 2){
    //     dynamicImage = 'https://cf.bstatic.com/xdata/images/hotel/square200/295787269.webp?k=9446d3203db1d1988381bb113c9f49726f844a16c4abcc8e8ec0e19e1c56be6a&o=';
    // }
    // else if(route.params.id == 3){
    //     dynamicImage = 'https://cf.bstatic.com/xdata/images/hotel/square200/499805594.webp?k=836bcafc226388b95ae5396c84d9355fd4965586c886f64ebcc9549e32301a50&o=';
    // }
</script>

<template>
    <div>       
        <h1>Welcome to trip {{ $route.params.id }} </h1>
        <img :src="dynamicImage[route.params.id - 1]">
    </div>
</template>