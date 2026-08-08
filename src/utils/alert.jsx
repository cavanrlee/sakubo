import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const themeGreen = "#4CAF50";

const ThemedSwal = MySwal.mixin({
  confirmButtonColor: themeGreen,
  cancelButtonColor: "#6b7280",
  buttonsStyling: true,
  customClass: {
    popup: "rounded-2xl p-3 shadow-xl text-xs",
    title: "text-sm! font-bold text-gray-800",
    htmlContainer: "text-xs! text-gray-600",
    actions: "!flex !gap-2 !w-full", // Ginagawang flex container para magkatabi
    confirmButton: "!flex-1 py-2 text-xs! rounded-xl font-medium text-white shadow-sm",
    cancelButton: "!flex-1 py-2 text-xs! rounded-xl font-medium text-white shadow-sm",
  },
});

const ThemedToast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  customClass: {
    popup: "!rounded-xl !p-3 !text-xs !shadow-lg",
  },
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

const Alert = {
  success: (title = "Success", html = "") =>
    ThemedSwal.fire({
      icon: false,
      title,
      html,
    }),

  error: (title = "Error", html = "") =>
    ThemedSwal.fire({
      icon: false,
      title,
      html,
    }),

  warning: (title = "Warning", html = "") =>
    ThemedSwal.fire({
      icon: false,
      title,
      html,
    }),

  confirm: async (
    title = "Are you sure?",
    html = "This action cannot be undone."
  ) => {
    const result = await ThemedSwal.fire({
      icon: false,
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

  toast: {
    success: (title = "Success") =>
      ThemedToast.fire({
        icon: false,
        title,
      }),

    error: (title = "Error") =>
      ThemedToast.fire({
        icon: false,
        title,
      }),

    warning: (title = "Warning") =>
      ThemedToast.fire({
        icon: false,
        title,
      }),
  },

  close: () => Swal.close(),
};

export default Alert;