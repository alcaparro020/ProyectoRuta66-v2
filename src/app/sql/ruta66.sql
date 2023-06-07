-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: db
-- Tiempo de generación: 07-06-2023 a las 07:21:52
-- Versión del servidor: 8.0.32
-- Versión de PHP: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ruta66`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Coches`
--

CREATE TABLE `Coches` (
  `id` int NOT NULL,
  `Dni_Propietario` varchar(9) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `Matricula` varchar(8) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish2_ci NOT NULL,
  `Marca` varchar(150) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `Modelo` varchar(150) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `Color` varchar(150) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `Modificado` tinyint(1) NOT NULL,
  `Homologado` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `Coches`
--

INSERT INTO `Coches` (`id`, `Dni_Propietario`, `Matricula`, `Marca`, `Modelo`, `Color`, `Modificado`, `Homologado`) VALUES
(1, '12345678w', '1111 AAA', 'toyota', 'supra', 'verde', 1, 1),
(66, '12345678w', '1234 ABC', 'nissan', 'skyline gtr 34', 'azul', 0, 1),
(67, '12345678s', '4321 LOL', 'GENESIS', 'G80', 'NEGRO', 0, 1),
(78, '12345678w', '6589 HGG', 'honda', 'civic type r', 'rojo fuego', 0, 1),
(81, '95632147J', '8761 KJH', 'mitshubishi', 'kaskai', 'morado', 0, 0),
(65, '87654321f', '9878 HFG', 'honda', 'civic', 'rojo', 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Eventos`
--

CREATE TABLE `Eventos` (
  `Id` int NOT NULL,
  `Dni_Usuario_Creacion` varchar(9) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `Ubicacion` varchar(150) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `Fecha` date NOT NULL,
  `Hora` varchar(5) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `Descripcion` varchar(300) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `Permite_Modificados` tinyint(1) NOT NULL,
  `Permite_Sin_Homologar` tinyint(1) NOT NULL,
  `Numero_Plazas` int NOT NULL,
  `Imagenes` varchar(500) COLLATE utf8mb4_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `Eventos`
--

INSERT INTO `Eventos` (`Id`, `Dni_Usuario_Creacion`, `Ubicacion`, `Fecha`, `Hora`, `Descripcion`, `Permite_Modificados`, `Permite_Sin_Homologar`, `Numero_Plazas`, `Imagenes`) VALUES
(23, '12345678w', 'Alameda, Malaga C/ Diamantino García', '2023-06-30', '12:00', 'Vamos a ver muchos coches molones', 1, 0, 23, 'wallhaven-426rxg_1920x1080.png'),
(24, '87654321f', 'puerto Banus', '2023-06-14', '05:00', 'vamos a quemar rueda', 0, 1, 34, 'wallhaven-dpqy73_1920x1080.png'),
(25, '12365485f', 'Benalmadena, C/ juan carlos V', '2023-07-02', '19:00', 'vamo vamo vamo coche siuuu', 1, 1, 56, 'wallhaven-md3331_1920x1080.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Registros_Eventos`
--

CREATE TABLE `Registros_Eventos` (
  `Id` int NOT NULL,
  `Dni_Usuario` varchar(9) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `Id_Evento` int NOT NULL,
  `Participante` tinyint(1) NOT NULL,
  `Matricula_Coche_Participante` varchar(8) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish2_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `Registros_Eventos`
--

INSERT INTO `Registros_Eventos` (`Id`, `Dni_Usuario`, `Id_Evento`, `Participante`, `Matricula_Coche_Participante`) VALUES
(56, '12345678w', 25, 1, '1111 AAA'),
(57, '95632147J', 25, 1, '8761 KJH');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int NOT NULL,
  `dni` varchar(9) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish2_ci NOT NULL,
  `nombre` varchar(150) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `apellidos` varchar(150) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `edad` int NOT NULL,
  `email` varchar(150) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `telefono` int NOT NULL,
  `contrasenia` varchar(150) COLLATE utf8mb4_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `dni`, `nombre`, `apellidos`, `edad`, `email`, `telefono`, `contrasenia`) VALUES
(15, '0', 'admin', 'admin', 0, 'admin', 0, '1234'),
(17, '12345678s', 'macauli', 'culquin', 99, 'sisisisi@gmail.com', 667102030, '102030'),
(10, '12345678w', 'alvaro', 'gomez torres', 22, 'alvaro@gmail.com', 952745323, '1234'),
(22, '12365485f', 'jose', 'juanma', 32, 'juanma@gmail.com', 456852357, '1234'),
(14, '87654321f', 'pepe', 'almanza perez', 23, 'pepe@gmail.com', 952745323, '1234'),
(16, '87654321h', 'juan alberto', 'rodrigez', 21, 'juanalberto@gmail.es', 952745323, '1234'),
(26, '95632147J', 'Mario', 'Alpujarra', 24, 'mario@gmail.com', 852645751, 'Mario_21');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Coches`
--
ALTER TABLE `Coches`
  ADD PRIMARY KEY (`Matricula`),
  ADD KEY `FK_Dni_Propietario_usuarios_dni` (`Dni_Propietario`),
  ADD KEY `id_2` (`id`);

--
-- Indices de la tabla `Eventos`
--
ALTER TABLE `Eventos`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `FK_Dni_Creacion_Usuarios_Dni` (`Dni_Usuario_Creacion`);

--
-- Indices de la tabla `Registros_Eventos`
--
ALTER TABLE `Registros_Eventos`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `FK_Dni_Usuario_Usuarios_Dni` (`Dni_Usuario`),
  ADD KEY `FK_Id_Evento_Eventos_Id` (`Id_Evento`),
  ADD KEY `FK_Matricula_Coche_Participante_Coches_Matricula` (`Matricula_Coche_Participante`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`dni`),
  ADD KEY `id_2` (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Coches`
--
ALTER TABLE `Coches`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT de la tabla `Eventos`
--
ALTER TABLE `Eventos`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de la tabla `Registros_Eventos`
--
ALTER TABLE `Registros_Eventos`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `Coches`
--
ALTER TABLE `Coches`
  ADD CONSTRAINT `FK_Dni_Propietario_usuarios_dni` FOREIGN KEY (`Dni_Propietario`) REFERENCES `usuarios` (`dni`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `Eventos`
--
ALTER TABLE `Eventos`
  ADD CONSTRAINT `FK_Dni_Creacion_Usuarios_Dni` FOREIGN KEY (`Dni_Usuario_Creacion`) REFERENCES `usuarios` (`dni`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `Registros_Eventos`
--
ALTER TABLE `Registros_Eventos`
  ADD CONSTRAINT `FK_Dni_Usuario_Usuarios_Dni` FOREIGN KEY (`Dni_Usuario`) REFERENCES `usuarios` (`dni`) ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_Id_Evento_Eventos_Id` FOREIGN KEY (`Id_Evento`) REFERENCES `Eventos` (`Id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_Matricula_Coche_Participante_Coches_Matricula` FOREIGN KEY (`Matricula_Coche_Participante`) REFERENCES `Coches` (`Matricula`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
