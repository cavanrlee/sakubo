import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const themeGreen = "#4CAF50";

const ThemedSwal = MySwal.mixin({
  confirmButtonColor: themeGreen,
  cancelButtonColor: "#d33",
  buttonsStyling: true,
  customClass: {
    confirmButton:
      "px-4 py-2 rounded-xl font-medium text-white",
    cancelButton:
      "px-4 py-2 rounded-xl font-medium",
  },
});

const Alert = {
  success: (title = "Success", html = "") =>
    ThemedSwal.fire({
      icon: "success",
      title,
      html, // ✅ FIXED
    }),

  error: (title = "Error", html = "") =>
    ThemedSwal.fire({
      icon: "error",
      title,
      html,
    }),

  warning: (title = "Warning", html = "") =>
    ThemedSwal.fire({
      icon: "warning",
      title,
      html,
    }),

  confirm: async (
    title = "Are you sure?",
    html = "This action cannot be undone."
  ) => {
    const result = await ThemedSwal.fire({
      icon: "warning",
      title,
      html,
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "Cancel",
    });

    return result.isConfirmed;
  },

  loading: (title = "Loading...") => {
    ThemedSwal.fire({
      title,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  },

  close: () => Swal.close(),
};

export default Alert;
