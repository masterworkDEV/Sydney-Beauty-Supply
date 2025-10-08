<template>
  <main class="py-10 mx-12 max-xl:mx-7 max-sm:mx-5 w-full">
    <div class="flex items-center justify-between mb-10">
      <div>
        <h1 class="text-3xl">Product Lists</h1>
        <nav class="my-2">
          <ul class="flex gap-2">
            <li class="text-sm">Dashboard</li>
            <li class="text-sm text-gray-300">Products</li>
          </ul>
        </nav>
      </div>
      <button
        class="gradient-black-btn text-white p-2.5 text-sm rounded flex items-center gap-2 shadow font-semibold"
        @click="handleCreateProductModal"
      >
        <FontAwesomeIcon :icon="faPlus" />
        Create Product
      </button>
    </div>

    <!-- Available Products -->
    <div class="bg-white shadow w-full max-h-[550px] p-3 overflow-auto">
      <input
        type="text"
        placeholder="Search Products..."
        class="p-2 border border-gray-300 my-3 w-full rounded"
        v-model="searchProducts"
      />

      <div
        v-if="isLoading"
        role="status"
        class="max-w-full p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded-sm shadow-sm animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
      >
        <div class="flex items-center justify-between">
          <div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          </div>
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
        </div>
        <div class="flex items-center justify-between pt-4">
          <div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          </div>
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
        </div>
        <div class="flex items-center justify-between pt-4">
          <div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          </div>
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
        </div>
        <div class="flex items-center justify-between pt-4">
          <div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          </div>
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
        </div>
        <div class="flex items-center justify-between pt-4">
          <div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          </div>
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
        </div>
        <span class="sr-only">Loading...</span>
      </div>

      <table class="table-auto" v-else>
        <thead>
          <tr class="bg-[#f1f1f1] w-full text-start">
            <th class="px-4 py-2"><input type="checkbox" checked="true" /></th>
            <th class="px-4 py-2 w-full">Product</th>
            <th class="px-4 py-2 w-full">Created</th>
            <th class="px-4 py-2 w-full">Status</th>
            <th class="px-4 py-2 w-full">Amount</th>
            <th class="px-4 py-2 w-full">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="product in filteredProductList"
            :key="product._id"
            class="mt-10 max-h-20 h-full w-full hover:bg-[#f1f1f1]"
            :title="product.name"
          >
            <td class="px-4 py-2"><input type="checkbox" /></td>
            <td class="px-4 py-2 flex items-start gap-5 h-full">
              <img
                :src="product.thumbnail.imageUrl"
                :alt="product.name"
                class="w-14 h-14 border border-[#ddd] rounded"
              />
              <div>
                <h4 class="font-semibold">{{ product.name }}</h4>
                <p class="text-sm">{{ product.description }}</p>
              </div>
            </td>
            <td class="px-4 py-2 text-start">
              {{ moment(product.dateAdded).format('MMM Do YY') }}
            </td>
            <td class="px-4 py-2">{{ product.isActive ? 'In Store' : 'Not In Store' }}</td>
            <td class="px-4 py-2">
              <span class="font-semibold">NGN{{ product.price }}</span>
            </td>
            <td class="px-4 py-2 grid grid-cols-2 gap-3">
              <svg
                :title="`Edit ${product.name}`"
                class="icon cursor-pointer"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
              <svg
                @click="toggleDeleteModal(product._id)"
                :title="`Delete ${product.name}`"
                viewBox="0 0 1024 1024"
                class="icon cursor-pointer"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M779.5 1002.7h-535c-64.3 0-116.5-52.3-116.5-116.5V170.7h768v715.5c0 64.2-52.3 116.5-116.5 116.5zM213.3 256v630.1c0 17.2 14 31.2 31.2 31.2h534.9c17.2 0 31.2-14 31.2-31.2V256H213.3z"
                    fill="#3688FF"
                  ></path>
                  <path
                    d="M917.3 256H106.7C83.1 256 64 236.9 64 213.3s19.1-42.7 42.7-42.7h810.7c23.6 0 42.7 19.1 42.7 42.7S940.9 256 917.3 256zM618.7 128H405.3c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7h213.3c23.6 0 42.7 19.1 42.7 42.7S642.2 128 618.7 128zM405.3 725.3c-23.6 0-42.7-19.1-42.7-42.7v-256c0-23.6 19.1-42.7 42.7-42.7S448 403 448 426.6v256c0 23.6-19.1 42.7-42.7 42.7zM618.7 725.3c-23.6 0-42.7-19.1-42.7-42.7v-256c0-23.6 19.1-42.7 42.7-42.7s42.7 19.1 42.7 42.7v256c-0.1 23.6-19.2 42.7-42.7 42.7z"
                    fill="#5F6379"
                  ></path>
                </g>
              </svg>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Delete Modal -->

    <div
      v-if="deleteModal"
      class="animate__animated animate__bounceIn rounded p-7 max-sm:w-[90%] h-40 flex justify-center items-center flex-col bg-white shadow fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-40"
    >
      <div class="text-center">
        <h3 class="mb-2">
          <b> You are about to delete {{ productName }} </b>
        </h3>
        <p class="max-sm:text-sm text-[#777]">
          This will delete your product from inventory <br />
        </p>
        <p class="max-sm:text-sm text-[#777]">Are you sure?</p>
      </div>
      <div class="actions w-full flex justify-end gap-5 mt-2">
        <button @click="deleteModal = !deleteModal" class="text-sm">Cancel</button>
        <button
          @click="handleDeleteProduct"
          class="bg-red-600 p-2 w-1/4 text-white text-xs rounded hover:opacity-80 cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
    <Overlay v-if="deleteModal" />
    <!--  -->

    <!-- Create Product -->
    <div
      v-if="createProductModal"
      class="bg-white fixed right-0 left-[50%] top-[50%] bottom-0 w-3/4 h-[90vh] translate-x-[-50%] translate-y-[-50%] z-40 rounded drop-shadow-2xl overflow-auto"
    >
      <div class="flex justify-between items-center py-4 mx-7 border-b border-gray-200">
        <h2 class="text-2xl">Add Product</h2>
        <FontAwesomeIcon :icon="faTimes" @click="handleCreateProductModal" class="cursor-pointer" />
      </div>
      <form @submit.prevent="submitProduct" class="p-7">
        <!-- Basic Info Section -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label for="product-name" class="block max-sm:text-sm font-medium text-gray-700"
              >Product Name</label
            >
            <input
              type="text"
              id="product-name"
              v-model="product.name"
              placeholder="Type product name"
              class="mt-1 p-2.5 max-sm:p-2 block w-full rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label for="category" class="block text-sm font-medium text-gray-700">Category</label>
            <select
              id="category"
              v-model="product.category"
              class="mt-1 p-2.5 max-sm:p-2 block w-full rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            >
              <option value="">Select category</option>
              <option value="electronics">Electronics</option>
              <option value="apparel">Apparel</option>
              <option value="books">Books</option>
            </select>
          </div>
        </div>

        <!-- Brand, Designer, and Price -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label for="brand" class="block text-sm font-medium text-gray-700">Brand</label>
            <input
              type="text"
              id="brand"
              v-model="product.brand"
              placeholder="Product brand"
              class="mt-1 p-2.5 max-sm:p-2 block w-full rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label for="designer" class="block text-sm font-medium text-gray-700">Designer</label>
            <input
              type="text"
              id="designer"
              v-model="product.designer"
              placeholder="Product designer"
              class="mt-1 p-2.5 max-sm:p-2 block w-full rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label for="price" class="block text-sm font-medium text-gray-700">Price</label>
            <div class="relative mt-1 rounded-md shadow-sm">
              <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span class="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                type="number"
                id="price"
                v-model="product.price"
                placeholder="29.99"
                class="mt-1 p-2.5 max-sm:p-2 block w-full rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              />
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <span class="text-gray-500 sm:text-sm" id="price-currency">USD</span>
              </div>
            </div>
          </div>
          <div>
            <label for="item-weight" class="block text-sm font-medium text-gray-700"
              >Product thumnail</label
            >
            <input
              type="file"
              accept="image/*"
              class="mt-1 p-2.5 max-sm:p-2 block w-full rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              @change="handleFileUpload('thumbnail', $event)"
              required
            />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label for="subCategory" class="block text-sm font-medium text-gray-700"
              >Sub Category</label
            >
            <input
              type="text"
              id="subCategory"
              v-model="product.subCategory"
              placeholder="e.g., Laptops, T-shirts"
              class="mt-1 p-2.5 max-sm:p-2 block w-full rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label for="gender" class="block text-sm font-medium text-gray-700">Gender</label>
            <select
              required
              name="gender"
              id="gender"
              v-model="product.gender"
              class="mt-1 p-2.5 max-sm:p-2 block w-full rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
              <option value="Unisex">Unisex</option>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label for="style" class="block text-sm font-medium text-gray-700">Style</label>
            <input
              type="text"
              id="style"
              v-model="product.style"
              placeholder="e.g., Casual, Formal"
              class="mt-1 p-2.5 max-sm:p-2 block w-full rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label for="collection" class="block text-sm font-medium text-gray-700"
              >Collection</label
            >
            <input
              type="text"
              id="collection"
              v-model="product.collection"
              placeholder="e.g., Summer 2024, Winter Collection"
              class="mt-1 p-2.5 max-sm:p-2 block w-full rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label for="materials" class="block text-sm font-medium text-gray-700">Materials</label>
            <input
              type="text"
              id="materials"
              v-model="product.materials"
              placeholder="e.g., Cotton, Leather"
              class="mt-1 p-2.5 max-sm:p-2 block w-full rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label for="season" class="block text-sm font-medium text-gray-700"
              >Season (comma-separated)</label
            >
            <input
              type="text"
              id="season"
              v-model="product.season"
              placeholder="e.g., Summer, Autumn"
              class="mt-1 p-2.5 max-sm:p-2 block w-full rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <!-- Inventory and Ratings Section -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label for="countInStock" class="block text-sm font-medium text-gray-700"
              >Count in Stock</label
            >
            <input
              type="number"
              id="countInStock"
              v-model="product.countInStock"
              placeholder="e.g., 50"
              class="mt-1 p-2.5 max-sm:p-2 block w-full rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label for="currency" class="block text-sm font-medium text-gray-700">Currency</label>
            <input
              type="text"
              id="currency"
              v-model="product.currency"
              placeholder="e.g., USD, EUR"
              class="mt-1 p-2.5 max-sm:p-2 block w-full rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label for="rating" class="block text-sm font-medium text-gray-700">Rating</label>
            <input
              type="number"
              id="rating"
              v-model="product.rating"
              placeholder="e.g., 4.5"
              step="0.1"
              class="mt-1 p-2.5 max-sm:p-2 block w-full rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label for="numReviews" class="block text-sm font-medium text-gray-700"
              >Number of Reviews</label
            >
            <input
              type="number"
              id="numReviews"
              v-model="product.numReviews"
              placeholder="e.g., 120"
              class="mt-1 p-2.5 max-sm:p-2 block w-full rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <!-- Status and Description -->
        <div class="flex items-center space-x-4 mb-4">
          <div class="flex items-center">
            <input
              id="isActive"
              name="isActive"
              type="checkbox"
              v-model="product.isActive"
              class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <label for="isActive" class="ml-2 block text-sm font-medium text-gray-700"
              >Is Active</label
            >
          </div>
          <div class="flex items-center">
            <input
              id="in-store-only"
              name="status"
              type="radio"
              v-model="product.status"
              value="in-store-only"
              class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
            />
            <label for="in-store-only" class="ml-2 block text-sm font-medium text-gray-700"
              >In-store only</label
            >
          </div>
          <div class="flex items-center">
            <input
              id="online-selling-only"
              name="status"
              type="radio"
              v-model="product.status"
              value="online-selling-only"
              class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
            />
            <label for="online-selling-only" class="ml-2 block text-sm font-medium text-gray-700"
              >Online selling only</label
            >
          </div>
          <div class="flex items-center">
            <input
              id="both-in-store-and-online"
              name="status"
              type="radio"
              v-model="product.status"
              value="both"
              class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
            />
            <label
              for="both-in-store-and-online"
              class="ml-2 block text-sm font-medium text-gray-700"
              >Both in-store and online</label
            >
          </div>
        </div>

        <!-- Description -->
        <div class="mb-4">
          <label for="description" class="block text-sm font-medium text-gray-700"
            >Description</label
          >
          <textarea
            id="description"
            v-model="product.description"
            rows="3"
            placeholder="Write product description here"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            required
          ></textarea>
        </div>

        <!-- Image Upload -->
        <div class="mb-4">
          <label for="product-images" class="block text-sm font-medium text-gray-700"
            >Product Images</label
          >
          <div
            class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
          >
            <div class="space-y-1 text-center">
              <svg
                class="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m-4-4a4 4 0 01-5.656 0l-4-4m4-4a4 4 0 01-5.656 0L28 28m0 0L34.172 21.828A4 4 0 0036 24V12a4 4 0 00-4-4H12a4 4 0 00-4 4v20a4 4 0 004 4h16m8-4a4 4 0 00-4-4H12a4 4 0 00-4 4v-4m32-4V12a4 4 0 00-4-4H12a4 4 0 00-4 4v20a4 4 0 004 4h16m8-4a4 4 0 00-4-4H12a4 4 0 00-4 4v-4m32-4V12a4 4 0 00-4-4H12a4 4 0 00-4 4v20a4 4 0 004 4h16a4 4 0 004-4z"
                  stroke-width="2"
                />
              </svg>
              <div class="flex text-sm text-gray-600">
                <label
                  for="file-upload"
                  class="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                  <span>Click to upload</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    multiple
                    accept="image/*"
                    class="sr-only"
                    @change="handleFileUpload('images', $event)"
                  />
                </label>
                <p class="pl-1">or drag and drop</p>
              </div>
              <p class="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
          </div>
        </div>

        <div class="flex justify-end space-x-4">
          <button
            type="button"
            @click="handleCreateProductModal"
            class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Discard
          </button>
          <button
            type="submit"
            class="gradient-black-btn flex justify-center text-center px-4 py-2 text-sm font-medium text-whit border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
          >
            <div v-if="uploadingProduct" class="flex items-center gap-1">
              <span>Creating Product</span>
              <!-- From Uiverse.io by EddyBel -->
              <div class="loader-form">
                <div class="loader__circle"></div>
                <div class="loader__circle"></div>
                <div class="loader__circle"></div>
                <div class="loader__circle"></div>
                <div class="loader__circle"></div>
              </div>
            </div>
            <span v-else>Create Product </span>
          </button>
        </div>
      </form>
    </div>
    <Overlay v-if="createProductModal" @click="handleCreateProductModal" />
  </main>
</template>

<script lang="ts" setup>
import { onMounted, ref, computed } from 'vue'

// FontAwesomeIcon Library
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'

// Moment Library
import moment from 'moment'

// Static Components
import Overlay from '../Overlay.vue'

// Data Store
import { dataStore } from '@/stores/dataStore'

// Our API client with our credentials included
import apiClient from '../../../api-folder/apiClient'
// import axios, { AxiosError } from 'axios' // Not needed if only using apiClient
// import { authStore } from '@/stores/authStore' // Not strictly needed here

// Initialize store
const store = dataStore()
// const authenticationStore = authStore() // Not strictly needed here

// Load product in Admin Dashboard
const isLoading = ref<boolean>(false)
const isError = ref<null | string>(null)

// Product list data fetching
const fetchProducts = async () => {
  isLoading.value = true
  try {
    await store.fetchProducts()
  } catch (error: any) {
    console.log(`Error fetching product at this time ${error}`)
    isError.value = error
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchProducts()
})

const searchProducts = ref<string>('')
// Quick search product

const filteredProductList = computed(() => {
  if (!store.products || !searchProducts.value) {
    return store.products
  }

  return store.products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchProducts.value.toLowerCase()) ||
      product.description?.toString().toLowerCase().includes(searchProducts.value)
    )
  })
})

//  Create Product Function
const createProductModal = ref<boolean>(false)

const handleCreateProductModal = () => {
  createProductModal.value = !createProductModal.value
}

// Use reactive for form data product
interface Product {
  name: string
  category: string
  subCategory: string
  gender: string
  brand: string
  price: number | null
  currency: string
  countInStock: number | null

  sizes: string
  materials: string
  style: string
  season: string

  collection: string
  designer: string
  description: string
  rating: number | null
  numReviews: number | null
  isActive: boolean
  dateAdded: Date
  status: 'in-store-only' | 'online-selling-only' | 'both'
}

const product = ref<Product>({
  name: '',
  category: '',
  subCategory: '',
  gender: 'Unisex',
  brand: '',
  price: null,
  currency: '',
  countInStock: null,

  sizes: '',
  season: '',
  materials: '',
  style: '',

  rating: null,
  numReviews: null,
  isActive: false,
  dateAdded: new Date(),
  collection: '',
  designer: '',
  description: '',
  status: 'both',
})

// Product Data
const uploadingProduct = ref<boolean>(false)
const selectedImages = ref<File[] | null>(null)
const thumbnailFile = ref<File | null>(null)

// Function to handle file uploads
const handleFileUpload = (fieldName: string, event: Event) => {
  const target = event.target as HTMLInputElement
  const files = target.files
  if (!files || files.length === 0) {
    return
  }
  switch (fieldName) {
    case 'thumbnail':
      handleThumbnailUpload(files[0])
      break
    case 'images':
      handleImagesUpload(files)
      break
    default:
      console.warn(`Unknown filename ${fieldName}`)
  }
}

const handleThumbnailUpload = (file: File | undefined) => {
  if (!file) {
    return
  }
  if (!file.type.startsWith('image/')) {
    console.warn(`Selected file is not an image ${file.type}`)
    return
  }
  thumbnailFile.value = file
}

const handleImagesUpload = (files: FileList): void => {
  if (!files || files.length === 0) {
    return
  }
  selectedImages.value = Array.from(files)
}

const appendArrayField = (formData: FormData, fieldName: string, value: string) => {
  if (value && value.trim()) {
    const arrayValue = value
      .split(',')
      .map((s) => s.trim())
      .filter((s) => s.length > 0)

    if (arrayValue.length > 0) {
      formData.append(fieldName, arrayValue.join(','))
    }
  }
}

const submitProduct = async () => {
  uploadingProduct.value = true
  try {
    const formData = new FormData()

    // Append simple text inputs
    formData.append('name', product.value.name)
    formData.append('category', product.value.category)
    formData.append('subCategory', product.value.subCategory)
    formData.append('gender', product.value.gender)
    console.log(product.value.gender)
    formData.append('brand', product.value.brand)
    formData.append('price', String(product.value.price))
    formData.append('currency', product.value.currency)
    formData.append('countInStock', String(product.value.countInStock))
    formData.append('collection', product.value.collection)
    formData.append('designer', product.value.designer)
    formData.append('description', product.value.description)
    formData.append('rating', String(product.value.rating))
    formData.append('numReviews', String(product.value.numReviews))
    formData.append('isActive', String(product.value.isActive))
    formData.append('status', product.value.status)

    // ➡️ FIXED: Handle all comma-separated array fields (sizes, materials, style, season)
    appendArrayField(formData, 'sizes', product.value.sizes)
    appendArrayField(formData, 'materials', product.value.materials)
    appendArrayField(formData, 'style', product.value.style)
    appendArrayField(formData, 'season', product.value.season)

    // Append file inputs
    if (thumbnailFile.value) {
      formData.append('thumbnail', thumbnailFile.value)
    }
    if (selectedImages.value) {
      selectedImages.value.forEach((file) => {
        formData.append('images', file)
      })
    }

    // Send FormData
    const response = await apiClient.post('/products', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    if (response.status === 200 || response.status === 201) {
      alert('Product posted successfully')
      console.log(`Product posted successfully`, response)

      // Reset product form state
      product.value = {
        name: '',
        category: '',
        subCategory: '',
        gender: 'Unisex',
        brand: '',
        price: null,
        currency: '',
        countInStock: null,
        sizes: '', // Reset to string
        season: '', // Reset to string
        rating: null,
        numReviews: null,
        isActive: false,
        dateAdded: new Date(),
        style: '', // Reset to string
        collection: '',
        materials: '', // Reset to string
        designer: '',
        description: '',
        status: 'both',
      }
      thumbnailFile.value = null
      selectedImages.value = null
      createProductModal.value = false
      fetchProducts()
    }
  } catch (error: any) {
    // Improved error logging
    const errorMessage = error.response?.data?.message || error.message || 'Unknown error occurred.'
    alert(`Failed to upload product: ${errorMessage}`)
    console.error('Failed to upload product:', error.response?.data || error)
  } finally {
    uploadingProduct.value = false
  }
}

// Delete Product Function (Logic remains correct)
const isDeletingProduct = ref<boolean>(false)
const deleteModal = ref<boolean>(false)
const productID = ref<null | string>(null)
const productName = ref<null | string>(null)

const toggleDeleteModal = (id: string) => {
  if (!id) {
    deleteModal.value = false
    return
  }

  try {
    const match = store.products?.find((item: any) => item._id === id)
    if (!match) {
      console.error(`Cannot find product with the selected ID`)
      return
    } else {
      deleteModal.value = true
      productID.value = match._id
      productName.value = match.name
    }
  } catch (error) {
    console.error('An ID is required for this operation')
    productID.value = null
    productName.value = null
    deleteModal.value = false
  }
}

const handleDeleteProduct = async () => {
  isDeletingProduct.value = true

  try {
    if (productID.value !== null) {
      const response = await apiClient.delete(`/products/${productID.value}`)

      if (response.status === 200 || response.status === 204) {
        alert(`Product Successfully Deleted`)
        console.log(response.data)
      }
    } else {
      console.error('Product ID cannot be null or undefined')
    }
  } catch (error: any) {
    console.error(error.response?.data || error)
    console.log('Something went wrong during deletion')
    isDeletingProduct.value = false
  } finally {
    isDeletingProduct.value = false
    deleteModal.value = false
    productID.value = null
    productName.value = null
    fetchProducts()
  }
}
</script>

<style>
.gradient-black-btn {
  /* Core Styles */
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff; /* White text for contrast */
  border: none;
  border-radius: 8px; /* Rounded corners */
  cursor: pointer;

  /* Gradient and Background */
  /* Transitions from a dark gray (#333) to black (#000) */
  background-image: linear-gradient(to bottom, #333, #000);
  background-color: #000; /* Fallback for older browsers */

  /* Shadow for Depth */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);

  /* Smooth transition for hover effect */
  transition: all 0.2s ease-in-out;
}

/* Hover Effect: Lighten the gradient slightly and increase the lift */
.gradient-black-btn:hover {
  background-image: linear-gradient(to top, #1c1b1b, #111);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.6);
  transform: translateY(-2px);
}

/* Active Effect: Push the button down */
.gradient-black-btn:active {
  background-image: linear-gradient(to bottom, #111, #444); /* Reverse gradient */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  transform: translateY(0);
}
</style>