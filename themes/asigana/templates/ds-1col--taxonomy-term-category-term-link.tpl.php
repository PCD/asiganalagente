<?php
if ( arg(0) == 'taxonomy' && arg(1) == 'term' && arg(2) == $tid ) {
  $classes = ' active';
}
/**
 * @file
 * Display Suite 1 column template.
 */
?>
<<?php print $ds_content_wrapper; print $layout_attributes; ?> class="ds-1col <?php print $classes;?> clearfix">
  <?php print $ds_content; ?>
</<?php print $ds_content_wrapper ?>>
