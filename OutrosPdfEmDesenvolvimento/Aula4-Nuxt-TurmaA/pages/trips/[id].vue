<script setup>
    const route = useRoute();
    console.log("route", route);

    const { data: peopleFound  } = await useFetch(`https://swapi.dev/api/people/${route.params.id}`)
    
    let character;
    const getCharacter = () => console.log("Character Chosen: ", character);
</script>

<template>
    <div>
        <h1> Trip Detailed of Id: {{ $route.params.id }} </h1>
        <p>Nome: {{ peopleFound.name }}</p>
        <p>Height: {{ peopleFound.height }}</p>
        
        <h3>Do you want another character?</h3>
        <label for="">Character Id: </label><input v-model="character" type="number">
        <button @click="getCharacter">Find</button>
    </div>
</template>