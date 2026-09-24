# ReactJS + TypeScript — Clean Code & Production Conventions

> Bộ quy tắc này áp dụng khi tạo và bảo trì các component React trong dự án.

---

## 1. Naming Conventions

### Files & Folders
```text
components/
├── interactive/
│   ├── FloatingContactBar.tsx       # PascalCase cho Component
│   ├── BookingModal.tsx
│   └── ImageComparisonSlider.tsx
hooks/
│   ├── useScrollPosition.ts         # camelCase, prefix "use"
│   └── useModal.ts
```

### Code Conventions
- Component: `PascalCase` (Vd: `ServiceFilterTabs`)
- Custom Hook: `camelCase`, prefix `use` (Vd: `useContactWidget`)
- Props / Types: `PascalCase`, suffix `Props` / `State` (Vd: `FloatingBarProps`)
- Constant: `UPPER_SNAKE_CASE` (Vd: `MAX_SERVICES_DISPLAY = 6`)
- Handler: prefix `handle` (Vd: `handleOpenChat`, `handleSelectCategory`)
- Boolean prop/variable: prefix `is` / `has` / `can` / `should` (Vd: `isOpen`, `hasDiscount`)

---

## 2. Hook Hygiene & Rules

- **Dependency Array:** Bắt buộc liệt kê đầy đủ tất cả state/props được sử dụng trong `useEffect`, `useCallback`, `useMemo`. Tuyệt đối không tắt warning bằng eslint-disable.
- **useCallback:** Sử dụng khi truyền handler callback xuống component con để tránh re-render không cần thiết.
- **useMemo:** Chỉ sử dụng khi tính toán dữ liệu thực sự tốn chi phí (expensive computations), không lạm dụng cho các phép gán đơn giản.
- **Cleanup:** Luôn dọn dẹp các event listener (`window.addEventListener('scroll', ...)`) hoặc timer trong hàm return của `useEffect`.

```tsx
useEffect(() => {
  const handleScroll = () => {
    setShowSticky(window.scrollY > 300);
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);
```

---

## 3. Checklist Kiểm Tra Component (Pre-Commit Checklist)

- [ ] Không có `any` trong toàn bộ code.
- [ ] Không có `console.log` thừa.
- [ ] Mọi component đều khai báo `interface ComponentProps`.
- [ ] List render luôn dùng `item.id` duy nhất làm `key`, không dùng index mảng `index`.
- [ ] Component không vượt quá 200 dòng code (tách sub-components nếu dài hơn).
- [ ] Cung cấp đầy đủ `aria-label` cho các tương tác người dùng.
