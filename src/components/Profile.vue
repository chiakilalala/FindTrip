<template>
  <div>
     <div class="w-full "   v-for="user in userInfo"
        :key="user.id" >
      <div
        class="pt-32 lg:px-5 p-6 flex container max-w-7xl mx-auto member flex flex-wrap items-center justify-around"
        
      >
        <div
          class="lg:py-0 py-5 flex-col lg:flex-row container max-w-7xl  bg-white flex text-gray-500 rounded-lg shadow-xl items-center"
        >
          <div class="w-full lg:w-1/5 flex-1 flex justify-center">
            <div
              class="border-solid border-4 border-gray-600 w-40 h-40 rounded-full overflow-hidden flex-shrink-0 mx-auto sm:m-0 bg-white"
            >
              <img :src="user.UserImg" class="w-40 h-40 p-5" alt />
            </div>
          </div>
          <div class="w-full lg:w-4/5">
            <div class="sm:pl-12 sm:pt-4 flex-1 text-gray-800">
              <div
                class="flex lg:items-start sm:flex-col sm:flex-wrap justify-center flex-wrap lg:mb-6 mb-0"
              >
                <div
                  class="lg:items-start flex flex-wrap md:w-auto w-full mb-0 sm:flex-col lg:flex-col justify-center"
                >
                  <h2
                    class="lg:text-left text-center text-2xl w-full mb-3 mt-4 sm:mt-0"
                  >{{user.Name}}</h2>
                  <div
                    class="flex sm:w-auto sm:mt-0 mb-0 lg:mb-3 w-full justify-center items-center"
                  >
                    <a href="#" class="text-blue-500 mr-3 hover:text-blue-500">
                      <svg
                        class="w-5 h-5 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 96.124 96.123"
                      >
                        <path
                          d="M72.089.02L59.624 0C45.62 0 36.57 9.285 36.57 23.656v10.907H24.037c-1.083 0-1.96.878-1.96 1.961v15.803c0 1.083.878 1.96 1.96 1.96H36.57v39.876c0 1.083.877 1.96 1.96 1.96h16.352c1.083 0 1.96-.878 1.96-1.96V54.287h14.654c1.083 0 1.96-.877 1.96-1.96l.006-15.803c0-.52-.207-1.018-.574-1.386-.367-.368-.867-.575-1.387-.575H56.842v-9.246c0-4.444 1.059-6.7 6.848-6.7l8.397-.003c1.082 0 1.959-.878 1.959-1.96V1.98c0-1.081-.876-1.958-1.957-1.96z"
                        />
                      </svg>
                    </a>
                    <a href="#" class="text-blue-500 mr-3 hover:text-blue-500">
                      <svg
                        class="w-5 h-5 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 612 612"
                      >
                        <path
                          d="M612 116.258c-22.525 9.981-46.694 16.75-72.088 19.772 25.929-15.527 45.777-40.155 55.184-69.411-24.322 14.379-51.169 24.82-79.775 30.48-22.907-24.437-55.49-39.658-91.63-39.658-69.334 0-125.551 56.217-125.551 125.513 0 9.828 1.109 19.427 3.251 28.606-104.326-5.24-196.835-55.223-258.75-131.174-10.823 18.51-16.98 40.078-16.98 63.101 0 43.559 22.181 81.993 55.835 104.479-20.575-.688-39.926-6.348-56.867-15.756v1.568c0 60.806 43.291 111.554 100.693 123.104-10.517 2.83-21.607 4.398-33.08 4.398-8.107 0-15.947-.803-23.634-2.333 15.985 49.907 62.336 86.199 117.253 87.194-42.947 33.654-97.099 53.655-155.916 53.655-10.134 0-20.116-.612-29.944-1.721 55.567 35.681 121.536 56.485 192.438 56.485 230.948 0 357.188-191.291 357.188-357.188l-.421-16.253c24.666-17.593 46.005-39.697 62.794-64.861z"
                        />
                      </svg>
                    </a>
                  </div>
                  <div class="flex sm:w-auto w-full mb-0 lg:mb-3 justify-center items-center">
                    <div class="lg:text-white lg:mr-4 mr-0 tracking-wider flex items-center">
                      <span class="text-gray-500">點數：{{user.UserPoints}}</span>
                      <img src="../assets/img/coin.png" class="w-8 h-8 mr-2" alt srcset />
                    </div>
                  </div>
                  <p
                    class="lg:text-gray-500 text-center leading-normal px-4 sm:px-0"
                  >{{user.MemberIntro}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</div> 
  </div>
</template>
<script>
export default {
props: ['userInfo'],
}
</script>