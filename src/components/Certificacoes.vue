<template>
  <section class="certificates-section">
    <h2>📜 Certificações</h2>
    <div class="certificates-grid">
      <div
        v-for="(cert, index) in certificados"
        :key="index"
        class="certificate-card"
      >
        <img :src="cert.imagem" :alt="cert.titulo" class="certificate-image" />
        <div class="certificate-info">
          <h3>{{ cert.titulo }}</h3>
          <span>Emitido por: {{ cert.emissor }}</span><br>
          <span>Concluído em: {{ cert.data }}</span><br><br>
          <a
            :href="cert.link"
            target="_blank"
            class="btn-cert"
          >
            Ver certificado
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import certificados from "../../public/json/certificados.json";

export default {
  name: "CertificacoesComponent",
  data() {
    return {
      certificados
    };
  }
};
</script>

<style scoped>
.certificates-section {
  padding: 40px 20px;
  background: #f5f8ff; /* tom claro igual ao fundo do seu portfólio */
}

.certificates-section h2 {
  text-align: center;
  margin-bottom: 30px;
  color: #000;
}

.certificates-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.certificate-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 25px 0;
}

.certificate-card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.15);
}

.certificate-image {
  width: 30%;
  display: block;
}

.certificate-info h3 {
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 8px;
}

.certificate-info span {
  font-size: 0.9rem;
  color: #555;
}

.btn-cert {
  display: inline-block;
  padding: 8px 14px;
  background: #007bff;
  color: white;
  font-size: 0.9rem;
  border-radius: 6px;
  text-decoration: none;
  transition: background 0.2s ease;
}

.btn-cert:hover {
  background: #0056b3;
}
</style>