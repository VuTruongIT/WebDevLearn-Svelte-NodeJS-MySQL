<script>
  import 'bootstrap/dist/css/bootstrap.min.css';
  import Header from './Header.svelte';
  import Sidebar from './Sidebar.svelte';
  import Footer from './Footer.svelte';

  let items = Array.from({ length: 50 }, (_, i) => ({ id: i + 1, name: `Item ${i + 1}`, checked: false }));
  let searchQuery = '';
  let currentPage = 1;
  let itemsPerPage = 10;
  let sortKey = 'id';
  let sortOrder = 'asc';

  function searchItems() {
    if (!searchQuery.trim()) {
      return items.sort((a, b) => {
        if (sortOrder === 'asc') return a[sortKey] > b[sortKey] ? 1 : -1;
        else return a[sortKey] < b[sortKey] ? 1 : -1;
      });
    }
    return items
      .filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
      .sort((a, b) => {
        if (sortOrder === 'asc') return a[sortKey] > b[sortKey] ? 1 : -1;
        else return a[sortKey] < b[sortKey] ? 1 : -1;
      });
  }

  function handleSearch() {
    currentPage = 1;
  }

  function addItem() {
    const newItem = { id: items.length + 1, name: `New Item ${items.length + 1}`, checked: false };
    items = [...items, newItem];
  }

  function editItem(id, newName) {
    items = items.map(item => item.id === id ? { ...item, name: newName } : item);
  }

  function deleteItem(id) {
    const itemToDelete = items.find(item => item.id === id);
    if (itemToDelete && confirm(`Are you sure you want to delete ${itemToDelete.name}?`)) {
      items = items.filter(item => item.id !== id);
    }
  }

  function toggleSort(key) {
    if (sortKey === key) {
      sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      sortKey = key;
      sortOrder = 'asc';
    }
  }

  function toggleSelectItem(id) {
    items = items.map(item => {
      if (item.id === id) {
        const updatedItem = { ...item, checked: !item.checked };
        console.log(`ID ${id} is ${updatedItem.checked ? 'checked' : 'unchecked'}`);
        return updatedItem;
      }
      return item;
    });
  }

  function deleteSelectedItems() {
    if (confirm("Are you sure you want to delete all selected items?")) {
      items = items.filter(item => !item.checked);
    }
  }

  function paginatedItems() {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return searchItems().slice(start, end);
  }
</script>

<main class="d-flex flex-column min-vh-100">
  <Header/>

  <div class="d-flex flex-grow-1">
    <!-- Sidebar -->
    <Sidebar/>

    <!-- Main Content -->
    <div class="content flex-grow-1 p-4">
      <header class="d-flex justify-content-between align-items-center mb-4">
        <h1 style="font-size: 1.25rem;">Admin Management</h1>
        <div>
          <button class="btn btn-success me-2" on:click={addItem}>Add New Item</button>
          <button class="btn btn-danger" on:click={deleteSelectedItems}>Delete Selected</button>
        </div>
      </header>

      <!-- Search and Pagination -->
      <div class="d-flex justify-content-between align-items-center my-3">
        <div class="input-group w-50">
          <input type="text" class="form-control" placeholder="Search..." bind:value={searchQuery} on:input={handleSearch} />
        </div>
        <div>
          <button class="btn btn-outline-secondary mx-1" on:click={() => currentPage--} disabled={currentPage === 1}>Previous</button>
          <span>Page {currentPage}</span>
          <button class="btn btn-outline-secondary mx-1" on:click={() => currentPage++} disabled={currentPage >= Math.ceil(searchItems().length / itemsPerPage)}>Next</button>
        </div>
      </div>

      <!-- Item List with Sorting and CRUD actions -->
      <table class="table table-hover table-bordered shadow-sm">
        <thead class="table-light">
          <tr>
            <th>
              <input type="checkbox" on:change={() => items.forEach(item => toggleSelectItem(item.id))} />
            </th>
            <th>
              ID
              <button class="btn btn-sm btn-outline-secondary ms-2" on:click={() => toggleSort('id')}>
                {#if sortKey === 'id'}
                  {#if sortOrder === 'asc'}↑{:else}↓{/if}
                {/if}
              </button>
            </th>
            <th>
              Name
              <button class="btn btn-sm btn-outline-secondary ms-2" on:click={() => toggleSort('name')}>
                {#if sortKey === 'name'}
                  {#if sortOrder === 'asc'}↑{:else}↓{/if}
                {/if}
              </button>
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {#each paginatedItems() as item}
            <tr>
              <td>
                <input type="checkbox" checked={item.checked} on:change={() => toggleSelectItem(item.id)} />
              </td>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <button class="btn btn-warning btn-sm mx-1" on:click={() => editItem(item.id, `Updated Name ${item.id}`)}>Edit</button>
                <button class="btn btn-danger btn-sm mx-1" on:click={() => deleteItem(item.id)}>Delete</button>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>

  <Footer/>
</main>






<style>
  .d-flex { display: flex; }
  .flex-column { flex-direction: column; }
  .flex-grow-1 { flex-grow: 1; }
  .min-vh-100 { min-height: 100vh; }


  .content { 
    background-color: #f8f9fa; 
    padding: 2rem; 
  }

  .table {
    background: #ffffff;
    width: 100%; /* Chiếm toàn bộ chiều rộng */
  }

  .table thead th,
  .table tbody td {
    font-weight: 500;
    font-size: 0.9rem;
    text-align: center; /* Căn giữa theo chiều ngang */
    vertical-align: middle; /* Căn giữa theo chiều dọc */
  }

  .table-hover tbody tr:hover {
    background-color: #e9ecef;
  }

  .btn-outline-secondary {
    color: #495057;
    border-color: #ced4da;
  }

  .btn-outline-secondary:hover {
    background-color: #6c757d;
    color: #ffffff;
  }

  .table-bordered {
    border: 1px solid #dee2e6;
  }
</style>

