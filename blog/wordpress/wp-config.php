<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'timber_blog' );

/** MySQL database username */
define( 'DB_USER', 'TimberAdmin' );

/** MySQL database password */
define( 'DB_PASSWORD', 'basecamp' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'e?}*d|~bQAw<3Gs_G*P<STDv[&dw UT$BqN9D+ cY.>,g`k4u:Z>hh?sgO#g!|K2' );
define( 'SECURE_AUTH_KEY',  'Mk8VQ==^^%f3WBYA=Yq(FORyUMBfA}%=7}Vp;s*tSZ;_b^[mBWe]2<uG ZD[qO]a' );
define( 'LOGGED_IN_KEY',    '_P}h+yqhi8ZTFJ*7Um^a9Wbfs]@ya8xFn1[%G7UD!d2S`i`d)xo]vYnyC&{2F]zF' );
define( 'NONCE_KEY',        '#JDvf#L!([fM9jRSOz9c5!.%oI+M)9mKtYtrRl>_<mKE}dzOPxDp|}.gOM/rvBTc' );
define( 'AUTH_SALT',        ']i0u,$pCTJ97rhT+GuJ|@tXXC poX>Aw?7AqX.fj.J;2V_h@]hG%Cw57AD+o:Bt;' );
define( 'SECURE_AUTH_SALT', '- >6cie ~>o NzJDEAKJnBnxx@z.IU^PDk?VI<2KVkQXK5D=vW}ll/(sBaPMzG J' );
define( 'LOGGED_IN_SALT',   '#c3blG1T<gCe|9|Ar;h&l~{+Y$@KPPMk-imM-7_F[ju&H2vD&!L])*s TWvu~61G' );
define( 'NONCE_SALT',       'Kp&e?k/AYWv&eLd|%__)eR|O|1Z NsS;NGGrw%Sl8v/uN6!@/fmX!)c4/9T566sI' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
