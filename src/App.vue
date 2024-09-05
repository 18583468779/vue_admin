<template>
  <h1>Hello App!</h1>

  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/front/home">Go to About</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
