<script>
import L from 'leaflet';

export default {
  name: 'MapComponent',
  props: {
    latitude: {
      type: Number,
      default: null,
    },
    longitude: {
      type: Number,
      default: null,
    },
  },
  mounted() {
    const map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
          'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }).addTo(map);

    const addMarker = (latitude, longitude, message) => {
      const customIcon = L.icon({
        iconUrl: require('@/assets/icons/location.svg'),
        iconSize: [45, 45],
        iconAnchor: [16, 32],
        popupAnchor: [0, -30],
      });

      const marker = L.marker([latitude, longitude], { icon: customIcon }).addTo(map);

      marker.bindPopup(
          `<div class="custom-popup">
          <h2>${message}</h2>
          <p>Координаты: <b>${latitude.toFixed(5)}, ${longitude.toFixed(5)}</b></p>
        </div>`
      ).openPopup();

      map.setView([latitude, longitude], 13);
    };

    if (this.latitude !== null && this.longitude !== null) {
      addMarker(this.latitude, this.longitude,"");
    } else if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            addMarker(latitude, longitude, 'Вы здесь!');
          },
          (error) => {
            console.error('Ошибка при получении местоположения:', error.message);
            alert('Не удалось определить ваше местоположение.');
          }
      );
    } else {
      alert('Ваш браузер не поддерживает геолокацию.');
    }
  },
};
</script>

<template>
  <div id="map"></div>
</template>

<style scoped>
#map {
  height: 100%;
  border-radius: 16px;
}
.leaflet-popup-content-wrapper {
  background-color: #f8f9fa;
  border-radius: 16px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
}
.leaflet-popup-content {
  font-family: Arial, sans-serif;
  font-size: 14px;
  color: #333;
}
.leaflet-popup-tip {
  background-color: #f8f9fa;
}
.custom-popup h2 {
  margin: 0;
  font-size: 8px;
  color: #007bff;
}
.custom-popup p {
  margin: 4px 0 0;
  font-size: 12px;
  color: #555;
}
@media (max-width: 1024px) {
  #map {
    height: 350px;
  }
}
</style>
