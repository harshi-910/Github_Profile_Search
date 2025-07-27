particlesJS("particles-js", {
  particles: {
    number: {
      value: 85,
      density: {
        enable: true,
        value_area: 900
      }
    },
    color: {
      value: "#00b4d8"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.4,
      random: false
    },
    size: {
      value: 3,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 130,
      color: "#00b4d8",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      straight: false,
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      }
    },
    modes: {
      grab: {
        distance: 200,
        line_linked: {
          opacity: 0.6
        }
      }
    }
  },
  retina_detect: true
});
