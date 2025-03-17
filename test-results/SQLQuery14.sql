;WITH db (id, parent_id, name, level)
AS (
	SELECT id, parent_id, name, 0 AS level
	FROM subdivisions
	WHERE parent_id in (SELECT subdivision_id FROM collaborators WHERE id=710253) 

	UNION ALL

	SELECT sd.id, sd.parent_id, sd.name, db.level + 1
	FROM 
		subdivisions sd
		join db ON sd.parent_id = db.id
)
 
SELECT coll.id, coll.name, db.name AS sub_name,  db.id AS sub_id, replicate('+ ', db.level) + db.name AS sub_level,
    (SELECT DISTINCT count(id)
    FROM collaborators 
	WHERE db.id = subdivision_id
    GROUP BY subdivision_id
	)  AS colls_count

FROM 
	db 
	join collaborators coll ON coll.subdivision_id = db.id
	
WHERE 
	coll.age < 40
	and db.id not in (100055, 100059)


