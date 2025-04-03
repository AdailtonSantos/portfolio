<template>
  <section class="general" id="competencias">
    <h2>Competências adicionais</h2>
    <section class="topics">
      <div>
        <h3><i class="bi bi-code"> Backend</i></h3>
        <ul>
          <li>Node.Js</li>
          <li>Express.Js</li>
          <li>Sequelize</li>
          <li>C#</li>
          <li>JWT</li>
          <li>Jest e Jest Puppeteer</li>
          <li>WebScraping</li>
          <li>WebSocket</li>
          <li>Docker</li>
          <li>GIT</li>
          <li>Serverless Framework</li>
        </ul>
      </div>
      <div>
        <h3><i class="bi bi-front"> Frontend</i></h3>
        <ul>
          <li>Vue.Js</li>
          <li>Nuxt.Js</li>
          <li>Javascript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Tailwind CSS</li>
        </ul>
      </div>
      <div>
        <h3><i class="bi bi-database"> Bancos de Dados</i></h3>
        <ul>
          <li>MySql</li>
          <li>MongoDB</li>
          <li>Microsoft SQL Server</li>
        </ul>
      </div>
      <div>
        <h3><i class="bi bi-terminal"> Aplicativos adicionais</i></h3>
        <ul>
          <li>N8N</li>
          <li>Typebot</li>
          <li>Zabbix</li>
          <li>Linux</li>
        </ul>
      </div>
    </section>
  </section>
</template>
<script>

export default {
  name: 'CompetenciasComponent',
}

</script>

<style scoped>

.topics {
  display: flex;
  justify-content: space-evenly;
}

h2 {
  text-align: center;
  margin: 80px 0;
}

div {
  box-shadow: 0 4px 0 4px whitesmoke;
  padding: 10px 35px;
  border-radius: 10px;

  min-width: 200px;
}

h3 {
  text-align: center;
  color: #2463EB;
}

ul {
  padding: 0;
  line-height: 22px;
}

ul li::marker {
  color: #2463EB;
}

</style>
