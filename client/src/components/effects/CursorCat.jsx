import { useEffect, useRef } from "react";
import useIsMobile from "../../hooks/useIsMobile";

import onekoSprite from "../../assets/images/oneko-classic.gif";

const SPRITE_SIZE = 32;
const CAT_SPEED = 10;
const REST_DISTANCE = 40;
const START_X = 32;
const START_Y = 32;

const FRAME_INTERVAL = 100;

const spriteSets = {
  idle: [[-3, -3]],

  alert: [[-7, -3]],

  tired: [[-3, -2]],

  sleeping: [[-2, 0]],

  N: [
    [-1, -2],
    [-1, -3],
  ],

  NE: [
    [0, -2],
    [0, -3],
  ],

  E: [
    [-3, 0],
    [-3, -1],
  ],

  SE: [
    [-5, -1],
    [-5, -2],
  ],

  S: [
    [-6, -3],
    [-7, -2],
  ],

  SW: [
    [-5, -3],
    [-6, -1],
  ],

  W: [
    [-4, -2],
    [-4, -3],
  ],

  NW: [
    [-1, 0],
    [-1, -1],
  ],
};

function CursorCat() {
  const isMobile = useIsMobile();

  const catRef = useRef(null);

  const catPosition = useRef({
    x: START_X,
    y: START_Y,
  });

  const mousePosition = useRef({
    x: START_X,
    y: START_Y,
  });

  const pointerInside = useRef(false);

  const pointerMoving = useRef(false);

  const frameCount = useRef(0);

  const lastFrameTime = useRef(0);

  useEffect(() => {
    if (isMobile) return;

    const cat = catRef.current;

    if (!cat) return;

    catPosition.current = {
      x: START_X,
      y: START_Y,
    };

    mousePosition.current = {
      x: START_X,
      y: START_Y,
    };

    pointerInside.current = false;
    pointerMoving.current = false;

    const handlePointerMove = (event) => {
      mousePosition.current = {
        x: event.clientX,
        y: event.clientY,
      };

      pointerInside.current = true;
      pointerMoving.current = true;
    };

    const handlePointerEnter = (event) => {
      pointerInside.current = true;

      mousePosition.current = {
        x: event.clientX,
        y: event.clientY,
      };

      pointerMoving.current = false;
    };

    const handlePointerLeave = () => {
      pointerInside.current = false;
      pointerMoving.current = false;
    };

    const handleWindowBlur = () => {
      pointerInside.current = false;
      pointerMoving.current = false;
    };

    const handleWindowFocus = () => {
      pointerInside.current = false;
      pointerMoving.current = false;
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState !== "visible") {
        pointerInside.current = false;
        pointerMoving.current = false;
      } else {
        pointerInside.current = false;
        pointerMoving.current = false;
      }
    };

    window.addEventListener(
      "pointermove",
      handlePointerMove,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "pointerenter",
      handlePointerEnter,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "pointerleave",
      handlePointerLeave,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "blur",
      handleWindowBlur
    );

    window.addEventListener(
      "focus",
      handleWindowFocus
    );

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange
    );

    const setSprite = (name) => {
      const sprites = spriteSets[name];

      if (!sprites) return;

      const sprite =
        sprites[
        frameCount.current % sprites.length
        ];

      cat.style.backgroundPosition = `
        ${sprite[0] * SPRITE_SIZE}px
        ${sprite[1] * SPRITE_SIZE}px
      `;
    };

    const getDirection = (diffX, diffY) => {
      const angle =
        Math.atan2(
          diffY,
          diffX
        ) *
        (180 / Math.PI);

      if (
        angle >= -22.5 &&
        angle < 22.5
      ) {
        return "E";
      }

      if (
        angle >= 22.5 &&
        angle < 67.5
      ) {
        return "SE";
      }

      if (
        angle >= 67.5 &&
        angle < 112.5
      ) {
        return "S";
      }

      if (
        angle >= 112.5 &&
        angle < 157.5
      ) {
        return "SW";
      }

      if (
        angle >= 157.5 ||
        angle < -157.5
      ) {
        return "W";
      }

      if (
        angle >= -157.5 &&
        angle < -112.5
      ) {
        return "NW";
      }

      if (
        angle >= -112.5 &&
        angle < -67.5
      ) {
        return "N";
      }

      return "NE";
    };

    const renderPosition = () => {
      const {
        x,
        y,
      } = catPosition.current;

      cat.style.transform = `
        translate3d(
          ${x - SPRITE_SIZE / 2}px,
          ${y - SPRITE_SIZE / 2}px,
          0
        )
      `;
    };

    let animationFrame;

    const animate = (timestamp) => {
      animationFrame =
        requestAnimationFrame(
          animate
        );

      if (
        timestamp -
        lastFrameTime.current <
        FRAME_INTERVAL
      ) {
        return;
      }

      lastFrameTime.current =
        timestamp;

      frameCount.current += 1;

      const sleeping =
        !pointerInside.current ||
        !pointerMoving.current ||
        document.visibilityState !== "visible";

      if (sleeping) {
        setSprite("sleeping");

        renderPosition();

        return;
      }

      const mouse =
        mousePosition.current;

      const catPositionValue =
        catPosition.current;

      const diffX =
        mouse.x -
        catPositionValue.x;

      const diffY =
        mouse.y -
        catPositionValue.y;

      const distance =
        Math.sqrt(
          diffX * diffX +
          diffY * diffY
        );

      if (distance < 8) {
        setSprite("idle");

        renderPosition();

        return;
      }

      const directionX =
        diffX / distance;

      const directionY =
        diffY / distance;

      const targetX =
        mouse.x -
        directionX *
        REST_DISTANCE;

      const targetY =
        mouse.y -
        directionY *
        REST_DISTANCE;

      const targetDiffX =
        targetX -
        catPositionValue.x;

      const targetDiffY =
        targetY -
        catPositionValue.y;

      const targetDistance =
        Math.sqrt(
          targetDiffX *
          targetDiffX +
          targetDiffY *
          targetDiffY
        );

      if (
        targetDistance < 8
      ) {
        setSprite("idle");

        renderPosition();

        return;
      }

      const direction =
        getDirection(
          targetDiffX,
          targetDiffY
        );

      setSprite(direction);

      const velocityX =
        (targetDiffX /
          targetDistance) *
        CAT_SPEED;

      const velocityY =
        (targetDiffY /
          targetDistance) *
        CAT_SPEED;

      catPositionValue.x +=
        velocityX;

      catPositionValue.y +=
        velocityY;

      catPositionValue.x =
        Math.max(
          16,
          Math.min(
            window.innerWidth - 16,
            catPositionValue.x
          )
        );

      catPositionValue.y =
        Math.max(
          16,
          Math.min(
            window.innerHeight - 16,
            catPositionValue.y
          )
        );

      renderPosition();
    };

    animationFrame =
      requestAnimationFrame(
        animate
      );

    const handleResize = () => {
      catPosition.current.x =
        Math.min(
          catPosition.current.x,
          window.innerWidth - 16
        );

      catPosition.current.y =
        Math.min(
          catPosition.current.y,
          window.innerHeight - 16
        );
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    setSprite("sleeping");

    renderPosition();

    return () => {
      cancelAnimationFrame(
        animationFrame
      );

      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      window.removeEventListener(
        "pointerenter",
        handlePointerEnter
      );

      window.removeEventListener(
        "pointerleave",
        handlePointerLeave
      );

      window.removeEventListener(
        "blur",
        handleWindowBlur
      );

      window.removeEventListener(
        "focus",
        handleWindowFocus
      );

      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );

      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, [isMobile]);

  if (isMobile) {
    return null;
  }

  return (
    <div
      ref={catRef}
      aria-hidden="true"
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-[100]
        h-[32px]
        w-[32px]
        overflow-hidden
        bg-no-repeat
        select-none
        will-change-transform
      "
      style={{
        backgroundImage:
          `url(${onekoSprite})`,
        backgroundSize:
          "256px 128px",
        backgroundPosition:
          "-96px -96px",
        imageRendering:
          "pixelated",
      }}
    />
  );
}

export default CursorCat;