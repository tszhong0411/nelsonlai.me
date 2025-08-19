-- Custom SQL migration file, put your code below! --
DROP TRIGGER update_comment_rate_counts_trigger ON vote;
DROP FUNCTION update_comment_rate_counts();
CREATE OR REPLACE FUNCTION update_comment_vote_counts() RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    IF NEW.like = true THEN
      UPDATE comment SET like_count = like_count + 1 WHERE id = NEW.comment_id;
    ELSE
      UPDATE comment SET dislike_count = dislike_count + 1 WHERE id = NEW.comment_id;
    END IF;
  ELSIF TG_OP = 'DELETE' THEN
    IF OLD.like = true THEN
      UPDATE comment SET like_count = like_count - 1 WHERE id = OLD.comment_id;
    ELSE
      UPDATE comment SET dislike_count = dislike_count - 1 WHERE id = OLD.comment_id;
    END IF;
  ELSIF TG_OP = 'UPDATE' THEN
    IF OLD.like = true AND NEW.like = false THEN
      UPDATE comment SET like_count = like_count - 1, dislike_count = dislike_count + 1 WHERE id = NEW.comment_id;
    ELSIF OLD.like = false AND NEW.like = true THEN
      UPDATE comment SET like_count = like_count + 1, dislike_count = dislike_count - 1 WHERE id = NEW.comment_id;
    END IF;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_comment_vote_counts_trigger
AFTER INSERT OR UPDATE OR DELETE ON vote
FOR EACH ROW EXECUTE FUNCTION update_comment_vote_counts();