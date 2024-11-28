<script>
  import { slide } from 'svelte/transition';

  let manageItemsOpen = false;
  let settingsOpen = false;
  let reportsOpen = false;
  let userManagementOpen = false;
  let isCollapsed = false;

  function toggleSubmenu(menu) {
      if (menu === 'manageItems') {
          manageItemsOpen = !manageItemsOpen;
      } else if (menu === 'settings') {
          settingsOpen = !settingsOpen;
      } else if (menu === 'reports') {
          reportsOpen = !reportsOpen;
      } else if (menu === 'userManagement') {
          userManagementOpen = !userManagementOpen;
      }
  }

  function toggleSidebar() {
      isCollapsed = !isCollapsed;
  }
</script>

<!-- Import Font Awesome Icons -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

<div class="sidebar bg-dark text-white p-4 {isCollapsed ? 'collapsed' : ''}">
  <button class="toggle-button" on:click={toggleSidebar} aria-label="Toggle sidebar">
    <i class="fas fa-bars"></i>
  </button>
  {#if !isCollapsed}
    <h2 class="text-center mb-4" style="margin-top: -44px; margin-left: 30px;">Admin Panel</h2>
  {/if}
  <nav class="nav flex-column">
    <!-- Dashboard -->
    <a class="nav-link text-white mb-3 d-flex align-items-center" href="#" aria-label="Dashboard">
      <i class="fas fa-tachometer-alt me-2"></i> 
      {#if !isCollapsed}<span>Dashboard</span>{/if}
    </a>

    <!-- Manage Items with Submenu -->
    <div class="nav-item">
      <a class="nav-link text-white mb-3 d-flex align-items-center justify-content-between" href="#" on:click={() => toggleSubmenu('manageItems')} aria-label="Manage Items">
        <span>
          <i class="fas fa-box me-2"></i> 
          {#if !isCollapsed}Manage Items{/if}
        </span>
        {#if !isCollapsed}
          <i class="fas fa-chevron-down" style:transform={`rotate(${manageItemsOpen ? 180 : 0}deg)`}></i>
        {/if}
      </a>
      {#if manageItemsOpen && !isCollapsed}
        <div class="submenu ms-4" transition:slide={{ duration: 500 }}>
          <a class="nav-link text-white mb-2" href="#" aria-label="Add Item">Add Item</a>
          <a class="nav-link text-white mb-2" href="#" aria-label="Edit Item">Edit Item</a>
          <a class="nav-link text-white mb-2" href="#" aria-label="Delete Item">Delete Item</a>
        </div>
      {/if}
    </div>

    <!-- Settings with Submenu -->
    <div class="nav-item">
      <a class="nav-link text-white mb-3 d-flex align-items-center justify-content-between" href="#" on:click={() => toggleSubmenu('settings')} aria-label="Settings">
        <span>
          <i class="fas fa-cogs me-2"></i> 
          {#if !isCollapsed}Settings{/if}
        </span>
        {#if !isCollapsed}
          <i class="fas fa-chevron-down" style:transform={`rotate(${settingsOpen ? 180 : 0}deg)`}></i>
        {/if}
      </a>
      {#if settingsOpen && !isCollapsed}
        <div class="submenu ms-4" transition:slide={{ duration: 500 }}>
          <a class="nav-link text-white mb-2" href="#" aria-label="Profile Settings">Profile Settings</a>
          <a class="nav-link text-white mb-2" href="#" aria-label="Account Settings">Account Settings</a>
          <a class="nav-link text-white mb-2" href="#" aria-label="Privacy Settings">Privacy Settings</a>
        </div>
      {/if}
    </div>

    <!-- Reports with Submenu -->
    <div class="nav-item">
      <a class="nav-link text-white mb-3 d-flex align-items-center justify-content-between" href="#" on:click={() => toggleSubmenu('reports')} aria-label="Reports">
        <span>
          <i class="fas fa-chart-line me-2"></i> 
          {#if !isCollapsed}Reports{/if}
        </span>
        {#if !isCollapsed}
          <i class="fas fa-chevron-down" style:transform={`rotate(${reportsOpen ? 180 : 0}deg)`}></i>
        {/if}
      </a>
      {#if reportsOpen && !isCollapsed}
        <div class="submenu ms-4" transition:slide={{ duration: 500 }}>
          <a class="nav-link text-white mb-2" href="#" aria-label="Sales Report">Sales Report</a>
          <a class="nav-link text-white mb-2" href="#" aria-label="User Activity">User Activity</a>
          <a class="nav-link text-white mb-2" href="#" aria-label="Revenue Report">Revenue Report</a>
        </div>
      {/if}
    </div>

    <!-- User Management with Submenu -->
    <div class="nav-item">
      <a class="nav-link text-white mb-3 d-flex align-items-center justify-content-between" href="#" on:click={() => toggleSubmenu('userManagement')} aria-label="User Management">
        <span>
          <i class="fas fa-users me-2"></i> 
          {#if !isCollapsed}User Management{/if}
        </span>
        {#if !isCollapsed}
          <i class="fas fa-chevron-down" style:transform={`rotate(${userManagementOpen ? 180 : 0}deg)`}></i>
        {/if}
      </a>
      {#if userManagementOpen && !isCollapsed}
        <div class="submenu ms-4" transition:slide={{ duration: 500 }}>
          <a class="nav-link text-white mb-2" href="#" aria-label="Add User">Add User</a>
          <a class="nav-link text-white mb-2" href="#" aria-label="Edit User">Edit User</a>
          <a class="nav-link text-white mb-2" href="#" aria-label="Delete User">Delete User</a>
        </div>
      {/if}
    </div>
  </nav>
</div>

<style>
  .sidebar {
      background-color: #2c3e50;
      border-right: 1px solid #34495e;
      width: 250px;
      min-height: 100vh;
      overflow-y: auto;
      transition: width 0.3s ease;
      position: relative;
  }
  .collapsed {
      width: 85px; /* Chiều rộng khi thu gọn */
  }
  .toggle-button {
      position:relative;
      right: -3px;
      margin-bottom: 10px;
      background: none;
      border: none;
      color: #ecf0f1;
      font-size: 1.5rem;
      cursor: pointer;
      outline: none;
  }
  .sidebar h2 {
      font-size: 1.6rem;
      color: #ecf0f1;
  }
  .sidebar .nav-link {
      font-size: 1.1rem;
      padding: 12px 10px;
      transition: background-color 0.2s ease, color 0.2s ease;
      border-radius: 8px;
  }
  .sidebar .nav-link:hover {
      background-color: #34495e;
      color: #1abc9c;
  }
  .sidebar .nav-link i {
      font-size: 1.0rem;
  }
  .submenu .nav-link {
      font-size: 1rem;
      padding-left: 10px;
      transition: all 0.3s ease;
  }
  .submenu .nav-link:hover {
      background-color: #3a5062;
  }
  .nav-item .fa-chevron-down {
      transition: transform 0.3s ease;
  }
  .nav-link span {
      font-size: 15px;
  }
</style>
