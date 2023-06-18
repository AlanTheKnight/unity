
<template>
  <div>
    <div class="row mt-5">
      <div class="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-4">
        <div class="card card-body h-100">
          <div class="display-1 my-5 text-center bi bi-people-fill"></div>
          <div class="text-start">
            <h4>Members</h4>
            <div class="text-muted">Explore information about community members</div>
            <RouterLink to="/members" class="display-none stretched-link"></RouterLink>
          </div>
        </div>
      </div>

      <div class="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-4">
        <div class="card h-100">
          <div class="m-3 text-success position-absolute end-0">Coming soon!</div>
          <div class="card-body">
            <div class="display-1 my-5 text-center bi bi-journal-bookmark-fill"></div>
            <div class="text-start">
              <h4>Knowledge base</h4>
              <div class="text-muted">Get access to notes and useful resources</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card:hover {
  scale: 1.02;
  transition: scale 0.1s ease-in-out;
}
</style>
