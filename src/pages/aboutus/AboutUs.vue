<script>

export default {
  name: "AboutUs",
  data (){
    return {
      sections: ['кто мы','наша история','культура','личности','молодежные организации','образование и спорт','помощь',],
      currentSection: 0,
    }
  },
}
</script>

<template>
  <div class="main">
    <div style="width: 160px; height: 100%; border-right: 1px solid #EBEEF0; position: absolute; top:0; z-index:1000" class="hid">
      <div style="position: sticky; top:120px;">
        <ul>
          <li v-for="(section, index) in sections" :key="index" style="cursor: pointer">
            <div :class="['circle mb-8 mx-auto', { active: currentSection === index }]">
            </div>
          </li>
        </ul>
      </div>
    </div>

      <div class="text-box flex-wrap hid" style="width:140px; position: fixed; top:140px; left: 120px; padding: 12px 24px; z-index:1000">
        {{ sections[currentSection] }}
      </div>
  </div>
</template>

<style scoped>
.main {
  position: relative;
  width: 100%;
  display: flex;
}
.circle {
  width: 25px;
  height: 25px;
  border: 1px solid #EBEEF0;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
  margin-bottom: 48px;
  margin-left: auto;
  margin-right: auto;
}
.circle::before {
  content: '';
  width: 10px;
  height: 10px;
  background-color: #575F6C;
  border-radius: 50%;
}

.circle.active {
  border-color: rgba(0, 114, 171, 0.2);
  width: 30px;
  height: 30px;
}

.circle.active::before {
  border: 1px solid rgba(0, 114, 171, 0.25);
  background-color: #0072AB;
}
.text-box {
  background-color: #ffff;
  border: 1px solid #E0E3E8;
  border-radius: 8px;
  font-size: 16px;
  color: #575F6C;
  font-weight: 500;
  text-align: center;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>