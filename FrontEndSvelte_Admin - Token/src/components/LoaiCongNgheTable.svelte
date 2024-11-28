<script lang="ts">
    import type { LoaiCongNghe } from '../types/loaiCongNghe';
    import styles from '../styles/CongNgheTable.module.css'; // Import CSS module
    
    export let data: LoaiCongNghe[];
  </script>
  
  <table class={styles.table}>
    <thead>
      <tr>
        <th>ID</th>
        <th>Tên</th>
        <th>Tiêu Đề SEO</th>
        <th>Mô Tả</th>
        <th>Loại Công Nghệ Cha</th>
        <th>Thứ Tự</th>
        <th>Hiển Thị Trang Chủ</th>
        <th>Ngày Tạo</th>
        <th>Trạng Thái</th>
      </tr>
    </thead>
    <tbody>
      {#each data as item}
        <tr>
          <td>{item.ID}</td>
          <td>{item.Ten}</td>
          <td>{item.TieuDeSEO}</td>
          <td>{item.MoTa ?? '-'}</td>
          <td>{item.ParentID ?? '-'}</td>
          <td>{item.ThuTu ?? '-'}</td>
          <td>{item.HienThiTrangChu ? 'Có' : 'Không'}</td>
          <td>{new Date(item.NgayTao).toLocaleDateString()}</td>
          <td>{item.TrangThai ? 'Hoạt Động' : 'Không Hoạt Động'}</td>
        </tr>
      {/each}
    </tbody>
  </table>