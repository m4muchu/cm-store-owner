import React from 'react'
import { SortableContainer, SortableElement } from 'react-sortable-hoc'
import arrayMove from 'array-move'
import classnames from 'classnames'

const SortableItem = SortableElement(props => {
  const { value: item } = props
  return (
    <div
      className={classnames('uploaded-photo', {
        'cover-photo': item.index === 0,
      })}
    >
      <div className="image-wrap">
        {!props.hide_cover_btn && (
          <span className="set-as-cover-btn" onClick={() => props.makeCover(item.index)} />
        )}
        <span className="image-delete-btn" onClick={() => props.removeItem(item.index)} />
        <img src={item?.url} alt="" />
      </div>
    </div>
  )
})
const SortableList = SortableContainer(props => {
  const { items, ...restProps } = props
  return (
    <div className="uploaded-photo-wrap">
      {items &&
        items.map((item, index) => (
          <SortableItem
            key={`attachment_${index}`}
            index={index}
            value={{ ...item, index }}
            hide_cover_btn={restProps.disabled}
            {...restProps}
          />
        ))}
    </div>
  )
})

export const ImageSortable = props => {
  const makeCover = file_index => {
    props.onUpdate && props.onUpdate(arrayMove(props.files, file_index, 0))
  }

  const onSortEnd = dragResult => {
    const { oldIndex, newIndex } = dragResult
    props.onUpdate && props.onUpdate(arrayMove(props.files, oldIndex, newIndex))
  }
  const removeItem = index => {
    let files = props.files
    let removed_item = files.splice(index, 1)
    props.onRemove && props.onRemove(removed_item, files)
    // props.onUpdate && props.onUpdate( files );
  }

  return (
    <SortableList
      axis="xy"
      disabled={props.lock_sortable}
      items={props.files}
      onSortEnd={onSortEnd}
      makeCover={index => makeCover(index)}
      removeItem={index => removeItem(index)}
    />
  )
}
