<script setup>

  const {data: bookings} = await useFetch('http://localhost:8000/booking',{
    key: 'loadBooking'
  });
  
  const bookingDelete = async (idToDelete) => {
    //console.log("id to delete: ", idToDelete)
    const {} = await useFetch(`http://localhost:8000/booking/${idToDelete}`, {
      method: 'delete',
      onResponse(){
        alert("Booking Successfully deleted");        
        refreshNuxtData('loadBooking')
      },
      onResponseError(){
        alert("Was not possible to delete this booking!");
      }
    });
  }
</script>

<template>
  <div>
    <h1>My booking List:</h1>
    <div v-for="booking in bookings.results" :key="booking.id">
      <span><strong>Booking id:</strong> {{ booking.id }} , </span>
      <span><strong>Trip:</strong> {{ booking.tripFK }} , </span>
      <span><strong>Start date:</strong> {{ booking.startDate }} , </span>
      <span><strong>End date:</strong> {{ booking.endDate }} , </span>
      <span><strong>Customer:</strong> {{ booking.customUserFK }} </span>
      <button @click="bookingDelete(booking.id)">Delete</button>
      <br>
    </div>
  </div>
</template>
